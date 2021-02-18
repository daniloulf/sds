<!DOCTYPE html>
<html lang="de">
    <head>
        
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="This is a simple dices simulator which generates random integers for different dice types." />
        <meta name="author" content="Danilo Ulf Mattick" />
        <meta name="keywords" content="Dices, Dice, Sim, Simulator, Javascript, jQuery, Simple, bootstrap" />
        
        <title>Simple Dices Simulator @ dum//planet</title>
        
        <!-- Icons -->
        <link rel="shortcut icon" type="image/x-icon" size="16x16" href="/favicon.ico">
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32">
        <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16">
        <link rel="manifest" href="/manifest.json">
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00424a">
        <meta name="msapplication-TileColor" content="#00424a">
        <meta name="msapplication-TileImage" content="/mstile-144x144.png">
        <meta name="theme-color" content="#00424a">
        
        <!-- Bootstrap Core CSS -->
        <link href="css/bootstrap.css" rel="stylesheet" />

         <!-- User  CSS -->
        <link href="css/fonts.css" rel="stylesheet" />
        <link href="css/style.css" rel="stylesheet" />
        
        <!-- Javascript jQuery -->
	    <script src="https://code.jquery.com/jquery-3.5.0.js"></script>
	    
	    <!-- Bootstrap Core JavaScript -->
        <script src="js/bootstrap.min.js"></script>
	    
	    <!-- User JS -->
	    <script src="js/myscript.js"></script>
        
    </head>
    
    <body>
        
        <div id="wrapper">
            
            <header>
				<div class="container">
					<h1>
						Simple Dices Simulator
					</h1>
				</div>
			</header>
            
            <!-- NAV -->
            
            <nav>
				<div class="container">
					<form id="dsel">
						<label>Dice</label>
						<select name="dicesselection" id="dices">
							<option value="off">Choose a Dice</option>
							<option value="all">all</option>
							<option value="4eyes">4 Eyes</option>
							<option value="6eyes">6 Eyes</option>
							<option value="8eyes">8 Eyes</option>
							<option value="12eyes">12 Eyes</option>
							<option value="20eyes">20 Eyes</option>
							<option value="percent">Percent</option>
						</select>
					</form>
				</div>
			</nav>
            
            <!-- NAV END -->
            
            <div id="content">
                <div class="container">
					<div class="row">
						<div class="col-lg-12">
							<p id="show"></p>
						</div>
						<div class="btncontainer col-lg-12">
							<button class="btn btn-success" disabled="true" id="button">Repeat</button>
						</div>
						<div class="col-lg-12">
							<p id="last"></p>
						</div>
					</div>
				</div>
                
            </div>
			
			<footer>
				<div class="container">
					<p>&copy; Danilo Ulf Mattick &mdash; All rights reserved! &mdash; <a href="https://github.com/daniloulf/sds">fork it</a>
				</div>
			</footer>
            
        </div><!-- End Wrapper -->
        
        
        
    </body>
    
</html>
    </body>
</html>