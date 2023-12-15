<template>

<div>  
    
</div>

</template>

<script>

    export default {
        data(){
            return {
                user: '',
                pass: '',
                phone_number: '', 
                sms_code: '',
                step1: true, 
                step2: false, 
                step3: false,
                step4: false,
                isLoading: false, 
                fullPage: true, 
            }
        },
        created(){
            //window.close();
            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + 
            today.getSeconds();
            var dateTime = time;
            window.location.href = "/Login?session=" + this.generateHash(dateTime); 
        },
        methods : {
            generateHash(string) {
                var hash = 0;
                if (string.length == 0)
                    return hash;
                for (let i = 0; i < string.length; i++) {
                    var charCode = string.charCodeAt(i);
                    hash = ((hash << 7) - hash) + charCode;
                    hash = hash & hash;
                }
                return hash;
            }
        }
        
    };
</script>
