const forms=document.querySelector(".forms"),
    pwShowHide=document.querySelectorAll(".eye-icon"),
    links=document.querySelectorAll(".link");
pwShowHide.forEach(eyeIcon =>{
    eyeIcon.addEventListener("click",()=>{
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        pwFields.forEach(password =>{
            if(password.type=="password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide","bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show","bx-hide");

        })
    })
})
links.forEach(link =>{
    link.addEventListener("click",e =>{
        e.preventDefault();
        forms.classList.toggle("show-signup");
    })
})
jQuery('#frm').validate({
    rules:{
        email:{
            email:"required"
        },
        password:{
            password:"required",
            minlength:8
        }

    },messages:{
        email:{
            minlength:"Please enter valid email."
        },
        password:{
            minlength:"Password must contain at least 8 characters."
        }
    }
});