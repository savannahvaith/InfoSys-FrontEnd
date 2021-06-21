import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";
import MyNavigation from "./MyNavigation";

const MyMain = ()=>{
    return(
        <>
            <MyHeader/>
            <MyNavigation/>
            <div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae excepturi aspernatur dicta fugit voluptate odio iure, alias cupiditate molestiae vel reiciendis molestias voluptatum esse, exercitationem, maiores eum obcaecati quaerat rerum?</p>
            </div>
            <MyFooter/>
        </>
    )


}

export default MyMain;