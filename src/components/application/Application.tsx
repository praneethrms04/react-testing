import React from "react";

const Application = () => {
	return (
		<>
			<h1>Job Application Form</h1>
			<h2>Section 1</h2>

			<form>
				<div>
					<label htmlFor='name'>Name</label>
					<input type='text' id='name' />
				</div>
				<div>
					<label htmlFor='bio'>Bio</label>
					<textarea name='bio' id='bio'></textarea>
				</div>
				<div>
					<label htmlFor='job-loacation'>job-loacation</label>
					<select id='job-location'>
						<option value=''>Select a Country</option>
						<option value='US'>US</option>
						<option value='UK'>UK</option>
						<option value='CA'>Canada</option>
						<option value='IN'>India</option>
						<option value='AU'>Australia</option>
					</select>
				</div>
				<div>
					<label>
						<input type='checkbox' id='terms' />I agree to the terms
						and conditions
					</label>
				</div>
				<div>
					{" "}
					<button>Submit</button>
				</div>
			</form>
		</>
	);
};

export default Application;
