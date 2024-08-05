<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Portal - FEU TECH</title>

    <script>
        function redirectToProfile(event) {
            event.preventDefault();
            window.location.href = 'profile.html';
        }
    </script>

    <link href='https://students.feutech.edu.ph/_public/favicon.ico' rel='icon' type='image/x-icon'/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="landscape_login.css">
    <link rel="stylesheet" href="portrait_login.css">
    <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'>
</head>

<body>
    <!-- LANDSCAPE -->
    <div class="container-fluid landscape">
        <!-- Left Column -->
            <div class="row">
                    <aside class="col-lg-6 left-column">       
                        <div class="left-content text-left">
                            <h1 class="main-title">Welcome to the<br>FEU-Tech Student Portal!</h1>
                            <h2 class="sub-title">with your Student Portal, you can: </h2>

                            <div class="left-bullet-content">
                                <div class="left-bullet-row">
                                    <img  src="https://img.icons8.com/?size=100&id=98957&format=png&color=FFFFFF" alt="Profile Icon">
                                    <span>View your personal information</span>
                                </div>
    
                                <div class="left-bullet-row">
                                    <img  src="https://img.icons8.com/?size=100&id=9466&format=png&color=FFFFFF" alt="Schedule Icon">
                                    <span>View your current schedule, academic grades,<br>assessment, clearances, and curriculum</span>
                                </div>
    
                                <div class="left-bullet-row">
                                    <img width="40" height="40" src="https://img.icons8.com/?size=100&id=Kqsi3v5rWFW9&format=png&color=FFFFFF" alt="Globe Icon">
                                    <span>Enroll online</span>
                                </div>
    
                                <div class="left-bullet-row">
                                    <img src="https://img.icons8.com/?size=100&id=Y2GfpkgYNp42&format=png&color=FFFFFF" alt="Google Mail Icon">
                                    <span>Access and manage your student Google Mail</span>
                                </div>
                            </div>
                            
                        </div>
                    </aside>

                <!-- Right Column -->
                    <div class="col-lg-6 right-column">
                        <main class="right-content">
                            <img src="https://lh3.googleusercontent.com/d/1OYeIo8YG5f4KoxpS7OF-YHKLsVygpml0" alt="FEU Logo" class="FEU-logo mb-4">
                            <form onsubmit="redirectToProfile(event)">
                                <div class="input-forms">
                                    <div class="input-studentnumber">
                                        <label for="studentnumber"><strong>Student Number</strong></label>
                                    </div>
                                   
                                    <input type="text" id="studentnumber" name="studentnumber" required>
                                </div>

                                <div class="input-forms">
                                    <div class="input-password">
                                        <label for="password"><strong>Password</strong></label>
                                    </div>
                                    <input type="text" id="password" name="password" required>
                                </div>

                                <div class="forgot">
                                    <a href="#">Forgot Password?</a>
                                </div>

                                <button type="submit">LOG IN</button>
                            </form>
                        </main>

                        <footer>
                            <div class="left">
                                <a href="https://www.feutech.edu.ph/">© 2024 FEU - INSTITUTE OF TECHNOLOGY</a>
                            </div>
                            <div class="social-media-links">
                                <a href="https://www.facebook.com/FEUTechOfficial" target="_blank">
                                    <img src="https://img.icons8.com/?size=100&id=8818&format=png&color=b6b6b6" class="Facebook">
                                </a>
                                <a href="https://x.com/FEUTechOfficial" target="_blank">
                                    <img src="https://img.icons8.com/?size=100&id=fJp7hepMryiw&format=png&color=b6b6b6" class="X">
                                </a>
                                <a href="https://www.youtube.com/FitEduPh" target="_blank">
                                    <img src="https://img.icons8.com/?size=100&id=37326&format=png&color=b6b6b6"  class="YouTube">
                                </a>
                            </div>
                        </footer>
                    </div>
            </div>
    </div>

    <!-- PORTRAIT -->
    <div class="portrait">
        <header class="header">
            
            <ul class="row">
                <li>
                    <a class="navbar-brand" href="login.html">FEU Tech Student Portal</a>
                </li>

                <li class="dropdown">
                    <a href="javascript:void(0)" class='bx bx-chevron-down dropdown__icon' id="header-toggle"></a>
                            <div class="dropdown-content" id="dropdownContent">
                                <h1 class="main-title">Welcome to the<br>FEU-Tech Student Portal!</h1>
                                <h2 class="sub-title">with your Student Portal, you can: </h2>
        
                                <div class="left-bullet-content">
                                    <div class="left-bullet-row">
                                        <img  src="https://img.icons8.com/?size=100&id=98957&format=png&color=FFFFFF" alt="Profile Icon">
                                        <span>View your personal information</span>
                                    </div>
        
                                    <div class="left-bullet-row">
                                        <img  src="https://img.icons8.com/?size=100&id=9466&format=png&color=FFFFFF" alt="Schedule Icon">
                                        <span>View your current schedule, academic grades,<br>assessment, clearances, and curriculum</span>
                                    </div>
        
                                    <div class="left-bullet-row">
                                        <img width="40" height="40" src="https://img.icons8.com/?size=100&id=Kqsi3v5rWFW9&format=png&color=FFFFFF" alt="Globe Icon">
                                        <span>Enroll online</span>
                                    </div>
        
                                    <div class="left-bullet-row">
                                        <img src="https://img.icons8.com/?size=100&id=Y2GfpkgYNp42&format=png&color=FFFFFF" alt="Google Mail Icon">
                                        <span>Access and manage your student Google Mail</span>
                                    </div>
                                </div>
                              </div>
                       
                </li>
            </ul>


        </header>
      
        <main class="right-content">
            <img src="https://lh3.googleusercontent.com/d/1OYeIo8YG5f4KoxpS7OF-YHKLsVygpml0" alt="FEU Logo" class="FEU-logo mb-4">
            <form onsubmit="redirectToProfile(event)">
                <div class="input-forms">
                    <div class="input-studentnumber">
                        <label for="studentnumber"><strong>Student Number</strong></label>
                    </div>
                   
                    <input type="text" id="studentnumber" name="studentnumber" required>
                </div>

                <div class="input-forms">
                    <div class="input-password">
                        <label for="password"><strong>Password</strong></label>
                    </div>
                    <input type="text" id="password" name="password" required>
                </div>

                <div class="forgot">
                    <a href="#">Forgot Password?</a>
                </div>

                <button type="submit">LOG IN</button>
            </form>
        </main>

        <footer>
            <div class="left">
                <a href="https://www.feutech.edu.ph/">© 2024 FEU - INSTITUTE OF TECHNOLOGY</a>
            </div>
            <div class="social-media-links">
                <a href="https://www.facebook.com/FEUTechOfficial" target="_blank">
                    <img src="https://img.icons8.com/?size=100&id=8818&format=png&color=b6b6b6" class="Facebook">
                </a>
                <a href="https://x.com/FEUTechOfficial" target="_blank">
                    <img src="https://img.icons8.com/?size=100&id=fJp7hepMryiw&format=png&color=b6b6b6" class="X">
                </a>
                <a href="https://www.youtube.com/FitEduPh" target="_blank">
                    <img src="https://img.icons8.com/?size=100&id=37326&format=png&color=b6b6b6"  class="YouTube">
                </a>
            </div>
        </footer>
    </div>

   
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js"></script>
</body>
</html>
