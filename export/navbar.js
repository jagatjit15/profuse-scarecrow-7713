// navbar function

let funcNavbar = () => {
  return ` 
        <div id="_navbar">
            <div id="nav_logo">
                <img src="https://static.naukri.com/s/4/100/i/naukri_Logo.png" alt="logo">
            </div>
            <div id="mid_menu">
                <ul class="_menu_list">
                    <li id="_job"><a>jobs</a>
                        <div class="sub_menu_list _jf">
                            <div class="left_sub">
                                <p>search jobs</p>
                                <p>create free job alerts</p>
                            </div>
                            <div class="right_sub">
                                <p>job by location</p>
                                <p>job by skills</p>
                                <p>job by designation</p>
                                <p>job by company</p>
                                <p>job by category</p>
                                <p>browse all jobs</p>
                            </div>
                        </div>
                    </li>
                    <li id="_recruiters"><a>Recruiters</a>
                        <div class="sub_menu_list _rf">
                            <p>Browse all recruiter</p>
                            <p>recruiter connection</p>
                            <p>goto naukriRecruiter</p>
                        </div>
                    </li>
                    <li id="_companies"><a>Companies</a>
                        <div class="sub_menu_list _cf">
                            <p>Browse all companies</p>
                            <p>about companies</p>
                            <p>interview questions</p>
                            <p>write company review</p>
                            <p>write interview advice</p>
                            <p>company reviwes</p>
                            <p>company salaries</p>
                        </div>
                    </li>
                    <li id="_tools"><a>Tools</a>
                        <div class="sub_menu_list _tf">
                            <p>career dashboard</p>
                            <p>your next career move</p>
                            <p>skills trends</p>
                            <p>naukri labs</p>
                        </div>
                    </li>
                    <li id="_services"><a>services</a>
                    </li>
                    <li id="_more"><a>more</a>
                    </li>
                </ul>
            </div>
            <div id="right_menu">
                <ul class="_menu_list _rml">
                    <li id="_notification">
                        <img src="./image/notification.png" alt="">
                    </li>
                    <li id="my_naukri"><a>My naukri</a></li>
                </ul>
            </div>
        </div>
    `;
};

export { funcNavbar };

// INSTRUCTIONS
/**
 * use import {} from "module";
 * navbar css file name :- navbar.css
 * link css after title tag
 * create a nav tag and append the imported function to the nav.innerHTML;
 * dont need to write css file check common id names and class names
 */
