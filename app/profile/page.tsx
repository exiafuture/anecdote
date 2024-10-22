"use client";
import { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import "./profile.css";
import { useRouter } from "next/navigation";
import ContentCard from "../components/contentCard";

const Profile = () => {
    const { user, logout, deleteAccount } = useAuth(); // Use logout and deleteAccount from AuthContext
    const router = useRouter();
    const [email,setEmail] = useState("");

    const handleLogout = async () => {
        await logout();
        router.push("/auth"); // Redirect to auth page after logout
      };
    
    const handleDeleteAccount = async () => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete your account? This action cannot be undone."
        );
        if (confirmDelete) {
            await deleteAccount();
            router.push("/"); // Redirect to auth page after account deletion
        }
    };

    useEffect(()=>{
        if(!user) {
            router.push("/auth");
        } else {
            setEmail(`mailto:${user.email}?subject=Hellow&body=Hello! I am ${user.username}`);
        }
    },[user,router]);

    return (
        <div className="profilepage">
            <div className="profile-left">
                <div className="introduction-profile">
                    <h1>{user?.username || "User"}</h1>
                    <a href={email}>{user?.email || "Email"}</a>
                </div>

                <div className="profile-actions">
                    <button onClick={handleLogout} className="profile-action logout-btn">
                        Logout
                    </button>
                    <button onClick={handleDeleteAccount} className="profile-action delete-btn">
                        Delete
                    </button>
                </div>
            </div>

            <div className="profile-right">
                <div className="right-upper">
                    <h2>User's Message</h2>
                    <p>Like Chinese Idiom, the fishes longing to jump and transform into dragon from the water they reside, so do I to be amazing in creating unique and provking content for the world to admire!</p>
                </div>
                <div className="right-lower">
                    <ul>
                        <li>Content item 1</li>
                        <li>Content item 2</li>
                        <li>Content item 3</li>
                        <li>Content item 4</li>
                        <li>Content item 5</li>
                        <li>Content item 6</li>
                        <li>Content item 7</li>
                        <li>Content item 8</li>
                        <li>Content item 9</li>
                        <li>Content item 10</li>
                        <li>Content item 1</li>
                        <li>Content item 2</li>
                        <li>Content item 3</li>
                        <li>Content item 4</li>
                        <li>Content item 5</li>
                        <li>Content item 6</li>
                        <li>Content item 7</li>
                        <li>Content item 8</li>
                        <li>Content item 9</li>
                        <li>Content item 10</li>
                        <li>Content item 1</li>
                        <li>Content item 2</li>
                        <li>Content item 3</li>
                        <li>Content item 4</li>
                        <li>Content item 5</li>
                        <li>Content item 6</li>
                        <li>Content item 7</li>
                        <li>Content item 8</li>
                        <li>Content item 9</li>
                        <li>Content item 10</li>
                        <li>Content item 1</li>
                        <li>Content item 2</li>
                        <li>Content item 3</li>
                        <li>Content item 4</li>
                        <li>Content item 5</li>
                        <li>Content item 6</li>
                        <li>Content item 7</li>
                        <li>Content item 8</li>
                        <li>Content item 9</li>
                        <li>Content item 10</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Profile;
