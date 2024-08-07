// write the reference list to both versions of cv 
// Daniel Zhang, June 2024
console.log('loading ref_list.js');

document.write(`<article>
            <h3 class="caption">Reference</h3>
            <hr width="100%;" color="gray" size="3">

            <span class="main">
                <span class="three-column">
                    <span class="bold-a">Dr Michael Scott</span><br>
                    <span class="italic-a">Associate Professor and Head of Computing</span><br>
                    Game Academy, <br>
                    Penryn Campus<br>
                    Falmouth University<br>
                    Falmouth, Cornwall, TR10 9FE<br>
                    <button id="email_btn_michael" onclick="revealInfo('email_btn_michael','email_michael')">Reveal Email</button> <span id="email_michael" class="hidden-item"></span>
                    <button id="phone_btn_michael" onclick="revealInfo('phone_btn_michael','phone_michael')">Reveal Number</button>
                    <span id="phone_michael" class="hidden-item"></span>
                </span>

                <span class="three-column">
                    <span class="bold-a">Professor Andy Keane</span><br>
                    <span class="italic-a">Professor of Computational Engineering and Head of Rolls-Royce UTC</span><br>
                    R5009/B176, <br>
                    Rolls-Royce UTC<br>
                    Boldrewood Innovation Campus<br>
                    University of Southampton<br>
                    Southampton, SO16 7QF<br>
                    <button id="email_btn_andy" onclick="revealInfo('email_btn_andy','email_andy')">Reveal Email</button> <span id="email_andy" class="hidden-item"></span>
                    <button id="phone_btn_andy" onclick="revealInfo('phone_btn_andy','phone_andy')">Reveal Number</button> <span id="phone_andy" class="hidden-item"></span>
                </span>

                <span class="three-column"><span class="bold-a">Dr David Toal</span><br>
                    <span class="italic-a">Associate Professor</span><br>
                    R5011/B176, <br>
                    Rolls-Royce UTC<br>
                    Boldrewood Innovation Campus<br>
                    University of Southampton<br>
                    Southampton, SO16 7QF<br>
                    <button id="email_btn_david" onclick="revealInfo('email_btn_david','email_david')">Reveal Email</button> <span id="email_david" class="hidden-item"></span>
                    <button id="phone_btn_david" onclick="revealInfo('phone_btn_david','phone_david')">Reveal Number</button> <span id="phone_david" class="hidden-item"></span></span>
            </span>
        </article>`);