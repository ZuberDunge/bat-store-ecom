import { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

export default function Profile() {
    const { setLoggedIn } = useContext(AuthContext)

    const userInfo = JSON.parse(localStorage.getItem("userInfoData"))
    console.log((userInfo));
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem("userInfoData") == null) {
            navigate('/login')
            console.log("work");
        }
    }, [])
    const logOut = (e) => {
        setLoggedIn(false)
        localStorage.removeItem("userInfoData")
        localStorage.removeItem("userToken")
        navigate("/")
    }
    console.log(localStorage.getItem("userInfoData"));
    return (
        <> {localStorage.getItem("userInfoData") != null ?
            <>
                <div class="hero-img-cat login-section-wala">
                    <img
                        src="https://images.theconversation.com/files/449588/original/file-20220302-25-26i6jm.png?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop"
                        alt=""
                    />
                </div>
                <div
                    class="profile bat-flex flex-gap-1 bat-align-center bat-justify-center"
                >
                    <div class="bat-avatar-lg bat-txt-avatar">
                        <span class="bat-fs-80px bold-600">{userInfo.firstName.substring(0, 1)}</span>
                    </div>
                    <div class="user-info bat-flex bat-flx-dir-col">
                        <div class="user-name bold-500">{userInfo.firstName} {userInfo.lastName}</div>
                        <div class="user-mail">{userInfo.email}</div>
                        <div class="log-out bat-flex flex-gap-1">
                            {/* <button class="bat-btn bat-br-3px bat-btn-light">
                                Edit Profile</button
                            > */}
                            <button onClick={() => logOut()} class="bat-btn bat-br-3px bat-btn-light">Log Out</button>
                        </div>
                    </div>
                </div>
                <div class="profile-section-grid">
                    {/* <a href="/docs/orders.html">
                        <div class="profile-section-grid-item">
                            <span class="material-icons"> local_shipping </span> Manage Orders
                        </div></a
                    > */}
                    <Link to="wishlist">
                        <div class="profile-section-grid-item">
                            <span class="material-icons"> favorite </span> Manage Wishlist
                        </div></Link                    >
                    <Link to="/cart">
                        <div class="profile-section-grid-item">
                            <span class="material-icons"> shopping_cart </span> Manage Cart
                        </div></Link                    >
                    {/* <a href="/docs/addresses.html">
                        <div class="profile-section-grid-item">
                            <span class="material-icons"> home </span> Manage Addresses
                        </div></a
                    > */}
                </div></>
            : navigate('/login')}
        </>
    )
}