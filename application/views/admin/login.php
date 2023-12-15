<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<script>
            $(function() {
 
                if (localStorage.chkbx && localStorage.chkbx != '') {
                    $('#remember').attr('checked', 'checked');
                    $('#username').val(localStorage.usrname);
                    $('#password').val(localStorage.pass);
                } else {
                    $('#remember').removeAttr('checked');
                    $('#username').val('');
                    $('#password').val('');
                }
 
                $('#remember').click(function() {
 
                    if ($('#remember').is(':checked')) {
                        // save username and password
                        localStorage.usrname = $('#username').val();
                        localStorage.pass = $('#password').val();
                        localStorage.chkbx = $('#remember').val();
                    } else {
                        localStorage.usrname = '';
                        localStorage.pass = '';
                        localStorage.chkbx = '';
                    }
                });
            });
 
        </script> 

<section class="flat-account background">
      <div class="container">
        <div class="row">
          <div class="col-md-6" style="margin:auto;">
            <div class="form-login">
              <div class="title" style="margin-bottom:30px;">
                  
                <h3>
                    <?=$this->lang->line('Log in');?></h3>
                 <?php if (isset($alert) && $alert): ?>
                <h5 style="color: red;">
                  <?=$this->lang->line('incorrect credentials');?>
                  </h5>
              <?php endif ?>
              <?php if ($this->session->has_userdata('recovery')): ?>
                <h5 style="color: green;">
                  <?=$this->lang->line('Password sent');?>
                  </h5>
              <?php endif; ?>
              <?php $this->session->unset_userdata('recovery'); ?>
              </div>
              <form action="<?=base_url('admin/loginn')?>" method="POST">
                  <table>
                      <tr>
                          <td><label for="email"><?=$this->lang->line('Email');?> * </label></td>
                          <td><input type="email" name="email" placeholder="<?=$this->lang->line('Email');?>"  id="username"></td>
                      </tr>
                      <tr>
                          <td><label for="password"><?=$this->lang->line('Password');?> * </label></td>
                          <td><input type="password"  name="password" placeholder="******" id="password"></td>
                      </tr>
                  </table>
                
                <div class="form-box checkbox">
                  <input type="checkbox"   value="1" name="remember" id="remember">
                  <label for="remember"><?=$this->lang->line('Remember');?></label>
                </div><!-- /.form-box -->
                <div class="form-box">
                  <button type="submit" class="login" style="background-color:#55b536;"><?=$this->lang->line('Log in');?></button>
                  </div><!-- /.form-box -->
              </form><!-- /#form-login -->
            </div><!-- /.form-login -->
          </div><!-- /.col-md-6 -->
        </div><!-- /.row -->
      </div><!-- /.container -->
    </section>