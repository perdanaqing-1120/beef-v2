        let usernameInput = document.getElementById('usernameInput')
        let passwordInput = document.getElementById('passwordInput')
        let loginButton = document.getElementById('loginButton')
        let logoutButton = document.getElementById('logoutButton')
        
        loginButton.addEventListener('click', onLogin)
        logoutButton.addEventListener('click', onLogout)

        defaultLogin.style.display = "block"
        owner.style.display = "none"
        coOwner.style.display = "none"
        standar.style.display = "none"
        logoutButton.style.display = "none"
        
        usernameInput.addEventListener('input', checkInputs);
        passwordInput.addEventListener('input', checkInputs);
        
        function checkInputs() {
            loginButton.disabled = !(usernameInput.value && passwordInput.value)
        }
        
        function onLogin() {
            console.log('aktifLogin')
            console.log(passwordInput.value)
            console.log(usernameInput.value)
            localStorage.setItem("username", usernameInput.value)
            
            if(usernameInput.value == "Perdana" && passwordInput.value == "1234") {
                localStorage.setItem("role","owner")
                
                defaultLogin.style.display = "none"
                owner.style.display = "block"
                coOwner.style.display = "none"
                standar.style.display = "none"
                pembuka.style.display = "none"
                
                logoutButton.style.display = "block"
                loginButton.style.display = "none"
                
                usernameInput.style.display = "none"
                passwordInput.style.display = "none"
                
                root.style.backgroundColor = "#800080"
                
            } else if(usernameInput.value == "Dzul" && passwordInput.value == "1234") {
                localStorage.setItem("role","coOwner")
                
                defaultLogin.style.display = "none"
                owner.style.display = "none"
                coOwner.style.display = "block"
                standar.style.display = "none"
                pembuka.style.display = "none"
                
                logoutButton.style.display = "block"
                loginButton.style.display = "none"
                
                usernameInput.style.display = "none"
                passwordInput.style.display = "none"
                
                root.style.backgroundColor = "#ff0000"
                
            } else {
                localStorage.setItem("role","basic")
                
                defaultLogin.style.display = "none"
                standar.style.display = "block"
                owner.style.display = "none"
                coOwner.style.display = "none"
                pembuka.style.display = "none"
                
                logoutButton.style.display = "block"
                loginButton.style.display = "none"
                
                usernameInput.style.display = "none"
                passwordInput.style.display = "none"
            }
        }
        
        function onLogout() {
            console.log('aktifLogout')
            localStorage.clear()
            
            defaultLogin.style.display = "block"
            owner.style.display = "none"
            coOwner.style.display = "none"
            standar.style.display = "none"
            pembuka.style.display = "block"
            
            logoutButton.style.display = "none"
            loginButton.style.display = "block"
            
            usernameInput.style.display = "block"
            passwordInput.style.display = "block"
            
            root.style.backgroundColor = "#0d1c27"
        }
        
        if(localStorage.getItem('username')){
            usernameInput.style.display = "none"
            passwordInput.style.display = "none"

            loginButton.style.display = "none"
            
            if(localStorage.getItem('role') == "owner"){
                standar.style.display = "none"
                owner.style.display = "block"
                coOwner.style.display = "none"

                logoutButton.style.display = "block"
                usernameInput.style.display = "none"
                passwordInput.style.display = "none"
                
            }if(localStorage.getItem('role') == "coOwner"){
                owner.style.display = "none"
                standar.style.display = "none"
                coOwner.style.display = "block"

                logoutButton.style.display = "block"

                
            }if(localStorage.getItem('role') == "basic") {
                owner.style.display = "none"
                standar.style.display = "block"
                coOwner.style.display = "none"
                
                logoutButton.style.display = "block"
            }
        }
        