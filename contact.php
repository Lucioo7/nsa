<?php include "header.php" ?>

<header class="bg_toppp" style="background: url(images/contact.png) no-repeat center;">
  <div class="head_textt">
    <div class="header-content mx-auto">

      <h1 class="h1_text2">Contact Us</h1>
    </div>
  </div>

</header>

<div class="contactt">

  <div class="container">
    <div class="row">

      <div class="col-sm-7">
        <img src="images/call.png" class="img-fluid">
      </div>

      <div class="col-sm-5">
        <div class="cont_bg">
          <div class="contactt_box">
            <h3>Get In Touch</h3>
            <p>Have anything to ask? Let us know !</p>
            <p>or</p>
            <p class="email_cont">Email to us at : <a href="mailto:info@nsassociates.in">info@nsassociates.in</a></p>

            <form class="form-inline" action="/action_page.php">
              <div class="form-group">
                <input type="text" class="form-control" id="email" placeholder="Enter your name">
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="pwd" placeholder="Email address">
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="pwd" placeholder="Mobile number">
              </div>
              <div class="form-group">
                <textarea class="form-control" placeholder="Write to us..."></textarea>
              </div>

              <div align="center" class="button_contact"><button type="submit" class="btn btn-default">Submit</button>
              </div>
              <ul class="social_contact">
                <li class="facebook">
                  <a href="#">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li class="twitter">
                  <a href="#">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>

                <li class="twitter">
                  <a href="#">
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>



    </div>
  </div>

</div>



<!-- footer -->
<?php include "footer.php" ?>