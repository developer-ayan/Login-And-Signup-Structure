import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { loginUser } from '../store/action';
import { useDispatch } from 'react-redux'
function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()
    const history = useHistory()
   
    const login = () => {
        let user = {
            email,
            password
        }
        dispatch(loginUser(user, history))
            .then((uid) => {
                history.push(`/user/${uid}`)
            })
            .catch((err) => {
                alert(err)
            })
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card login_card">
                        <h1>Login</h1>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div class="d-grid gap-2">
                            <button onClick={login} class="btn btn-primary" type="button">Login</button>
                        </div>
                        <div>
                            <Link to="/signup">Create new account</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;