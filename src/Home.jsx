import Button from"./Button"
function Home(){
    return(
        <>
        <Button name="Register"/>
        <Button name="Login"/>
        <Button name="Logout"/>
        <Button name={1}/>
        </>
        
            
    )
}
export default Home