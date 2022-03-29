window.onload = function () {
        google.accounts.id.initialize({
            client_id: "721028352816-l9a1rdbuie529l8pmimtgo0bkmnt56bb.apps.googleusercontent.com",
            callback: handleCredentialResponse
            });
            google.accounts.id.renderButton(
                document.getElementById("buttonDiv"),
                { theme: "outline", size: "large" }  // customization attributes
            )
            google.accounts.id.prompt()
    }