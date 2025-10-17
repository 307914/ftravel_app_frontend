import { useNavigate } from 'react-router'
import { useAuth, useUserdata } from '../../context'
import { loginHandler } from '../../services/login-service'
import { numberregex, passwordregex } from '../../utils'
import './auth.css'
import { useEffect } from 'react'
import { useApi } from '../../useApi'
import { END_POINTS, REQUEST_TYPES } from '../../axiosInstance'

let ispasswordvalid,
    isnumbervalid
export const Login = () => {
    const { makeRequest } = useApi(END_POINTS.USER.LOGIN, REQUEST_TYPES.POST);
    const { number, username, name, authToken, email, password, authDispatch } = useAuth()
    const navigate = useNavigate();
    const { userdata } = useUserdata();

    useEffect(() => {
        if (userdata) {
            navigate('/');
        }
    }, [userdata])
    const handlenumber = (e) => {
        isnumbervalid = numberregex(e.target.value);
        if (isnumbervalid) {
            console.log("valid number")
            authDispatch({
                type: "NUMBER",
                payload: e.target.value
            })
        }
        else {
            console.log("number is invalid");
        }
    }
    const handlepassword = (e) => {
        ispasswordvalid = passwordregex(e.target.value)
        if (ispasswordvalid) {
            console.log("valid password");
            authDispatch({
                type: "PASSWORD",
                payload: e.target.value
            })
        }
        else {
            console.log("invalid password");
        }
    }
    const handlesubmitlogin = async (e) => {
        e.preventDefault();
        if (isnumbervalid && ispasswordvalid) {
            const payload = { number, password };
            console.log({ payload });
            await makeRequest(payload);
            authDispatch({
                type: "NAME",
                payload: username
            })

            // authDispatch({
            //     type: "TOKEN",
            //     payload: token
            // })
            authDispatch({
                type: "STATE_LOGIN"
            })
            authDispatch({
                type: "IS_AUTHOPEN"
            })
        }
    }
    return (
        <div className='auth-modal-container d-flex align-center'>
            <form onSubmit={handlesubmitlogin}>
                <div className="d-flex auth-modal-login direction-column">
                    <div className="auth-user">
                        <label className='auth-label'>Mobile Number <span className="asterk">*</span></label>
                        <input type="number"
                            defaultValue={number}
                            className="auth-input"
                            required
                            placeholder='Enter Mobile Number'
                            onChange={handlenumber}
                        />
                    </div>

                    <div className="auth-user">
                        <label className='auth-label'>Password <span className="asterk">*</span></label>
                        <input type="password"
                            defaultValue={password}
                            className="auth-input"
                            required
                            placeholder='Enter Password'
                            onChange={handlepassword}
                        />
                    </div>
                </div>
                <div className="btn-con d-flex direction-column">
                    <button className="button btn-submit">
                        Login
                    </button>
                    <button className="button btn-submit">
                        Login via Test Crediantials
                    </button>
                </div>
            </form>
        </div>
    )
}