function adduser(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("userName",user_name);
    window.location="rapidchat_room.html"
}

