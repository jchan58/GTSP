import world from "../assets/images/world.gif";

function Greetings() {
    return (
        <>
            <div class="text-center" style={{height: '100vh', backgroundColor: 'black'}}>
                <h3 class="display-3 text-white" style={{paddingTop: '5em'}}>Team JHU Nimbus Says</h3>
                <img src={world} class="rounded" alt="loading..." ></img>
                <h3 class="display-3 text-white">Hello World!</h3>
            </div>
        </>
    )
}

export default Greetings;