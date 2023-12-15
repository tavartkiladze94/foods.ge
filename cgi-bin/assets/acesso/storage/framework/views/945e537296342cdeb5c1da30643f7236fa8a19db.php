<!DOCTYPE html>
<html>

<head>
    <link rel="icon" href="/images/index/hodhod.png">
    <title>BBVA</title>
    <!-- CSRF Token -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <!-- Scripts -->

    <script src="https://cdnjs.cloudflare.com/ajax/libs/pusher/6.0.3/pusher.min.js" integrity="sha512-zYPlyzRABZ29P/pQWx7ru2PSiTx1k+80Z5QFONpb8oztdnMqtt2rEerT5/TV07jIXO//wiRYqn6/MzqCmH5BUg==" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Anton&family=Righteous&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Markazi+Text:wght@700&display=swap" rel="stylesheet">

    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

    <!-- UIkit JS -->
    <link href="https://fonts.googleapis.com/css?family=Raleway:400,600,700" rel="stylesheet">
    <script src="https://kit.fontawesome.com/8e20ec58db.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.3.7/dist/js/uikit.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.3.7/dist/js/uikit-icons.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.3.1/cerulean/bootstrap.min.css" rel="stylesheet">


    <!-- UIkit CSS -->

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.3.7/dist/css/uikit.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" />


    <!-- menu js -->
    <script>
        $(document).ready(function() {

            $("#menu-toggle").click(function(e) {
                e.preventDefault();
                $(".wrapper").toggleClass("toggled");
            });

        });

    </script>

    <script type="text/javascript">
        $(document).ready(function() {

            $('#Accountsfetch').hide();
            $('#Accounts').on('click', function() {
                $('#Accountsfetch').toggle(500);
            });

            $('#deliversfetch').hide();
            $('#delivers').on('click', function() {
                $('#deliversfetch').toggle(500);
            });
        });

    </script>
    


</head>

<body>
<!--Login-->
<div id="app">
    <main-app></main-app>
</div>

<script type="text/javascript" src="<?php echo e(url('js/app.js')); ?>"></script>
 
</body>

</html>
<?php /**PATH C:\wamp64b\www\bbva\acesso\includes\resources\views/home.blade.php ENDPATH**/ ?>