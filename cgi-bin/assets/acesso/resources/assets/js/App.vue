<template>
    <div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                messages: [],
                admin: false,
                NotClicked: true,
                receiver: false,
                Authinticated: false,
                CssToInclude: false,
                dt:{},
                homes:['/login','/My_Invoices',''],
                GD:false,
                Store:false,
                Count:{},
                True:true,
                events:{},
                Public: false,
                TurnBell: false,
                next:true,
                prev:true,
                PaginationPage: 1,
                PagIsLoaded: false
            }
        },
    };

</script>
<style>
    @import "./css/style.css";
</style>
