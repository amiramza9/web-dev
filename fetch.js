const getEmails=async()=>{
    const response= await fetch("https://jsonplaceholder.typicode.com/users");
    const data=await response.json();
    const emails=data.map(user=>{return user.email;});
    console.log(emails);
}
getEmails();

const getjokes=async()=>{
    const response= await fetch("https://icanhazdadjoke.com",{method:"GET", headers:{Accept: "application/json"}});
    const data=await response.json();
    console.log(data);
}
getjokes();