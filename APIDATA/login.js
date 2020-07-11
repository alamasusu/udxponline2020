export function login(action) {
    return fetch("https://xemphim20xx.000webhostapp.com/server/login.php",{
              method:'post',
              headers:{
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
              },
              body:JSON.stringify({
                  "NAME":action.name,
                  "PASS":action.password
              })
          })
          .then((response)=>response.json())
          .then((response)=>{
              return response;
          }).catch((error) => {
              console.log("loi login");
            });
}
export function checktoken(token){
  return fetch("https://xemphim20xx.000webhostapp.com/server/checklogin.php",{
            method:'post',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                "token":token,
            })
        })
        .then((response)=>response.json())
        .then((response)=>{
            return response;
        }).catch((error) => {
            console.log("loi checktoken");
          });
}
