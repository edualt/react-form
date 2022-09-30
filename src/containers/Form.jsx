import '../assets/styles/Form.css';
import Input from "../components/Input";

const Form = () => {
    return (
        <div className="form__container">
        <form className="form">
            <Input type="text" classname='form__field' label="Name" name="name" placeholder="Name Example" />
            <Input type="email" classname='form__field' label="Email" name="email" placeholder="example@mail.com" />
            <Input type="password" classname='form__field' label="Password" name="password" placeholder="*****" />
            <Input type="password" classname='form__field' label="Confirm Password" name="confirmPassword" placeholder="*****" />
            <Input type="file" classname='form__field' label="Upload your photo" name="photo" />
            <Input type="tel" classname='form__field' label="Telephone" name="telephone" />
            <Input type="url" classname='form__field' label="Search my city" name="url" />
            <Input type="date" label="Born date" name="date" />
            <Input type="number" classname='form__field' label="Expected Salary" name="number" />
            <Input type="time" classname='form__field' label="Expected check in time" name="time" />
            <Input type="range" classname='form__field' label="Skill range" name="range" />
            <Input type="checkbox" name="terms" label="I accept the terms and conditions" />
            <Input type="submit" classname="button" label="Confirm" value="Send" />
            <Input type="reset" classname="button" label="Reset" value="Reset" />
            
        </form>
        </div>
    )
}

export default Form