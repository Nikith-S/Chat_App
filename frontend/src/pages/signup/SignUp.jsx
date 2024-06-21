
import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckBox";
import { useState } from "react";
import useSignup from "../../Hooks/useSignup";


const SignUp = () => {
const[inputs, setinput] = useState({
	fullname:'',
	username:'',
	password:'',
	confirmpassword:'',
	gender:''
})

const {loading, signup} = useSignup();

const handleGenderCheckBox = (gender) => {
	setinput({...inputs,gender})

}

const handleSubmit = async(event) => {
event.preventDefault();
await signup(inputs)


}

	return (

		
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up <span className='text-blue-500'> ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text'>Full Name</span>
						</label>
						<input type='text' placeholder='Enter Fullname' className='w-full input input-bordered  h-10' 
						value={inputs.fullname}
						onChange={(e) => setinput({...inputs,fullname:e.target.value})}/>
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text'>Username</span>
						</label>
						<input type='text' placeholder='Enter Username' className='w-full input input-bordered h-10' 
						value={inputs.username}
						onChange={(e) => setinput({...inputs,username:e.target.value})}/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
							value={inputs.password}
							onChange={(e) => setinput({...inputs,password:e.target.value})}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered h-10'
							value={inputs.confirmpassword}
							onChange={(e) => setinput({...inputs,confirmpassword:e.target.value})}
						/>
					</div>

				<GenderCheckbox onCheckBox={handleGenderCheckBox} selectedGender={inputs.gender}/>

					<Link className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' to='/login'>
						Already have an account?
					</Link>

					<div>
						<button className='btn btn-block btn-sm mt-2 border border-slate-700'  disabled= {loading}>{loading ? <span className="loading loading-spinner-small"></span> : "signup"}</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default SignUp;