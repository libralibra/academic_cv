// write the publication list to both versions of cv 
// Daniel Zhang, June 2024

// only works for the webpages that contains publication sections
if (window.location.href.indexOf("index.html") > -1 ||
    window.location.href.indexOf("CV_no_sides.html") > -1) {
    document.write(`<article>
                <h3 class=" caption">Publication List</h3>
                <hr width="100%;" color="gray" size="3">

                <span class="bold-a">Book Chapter</span>
                <ol>
                    <li>Shujun Zhang, Donghui Chen, Kevin Hapeshi, Xu Zhang (2016). "3-D Modelling of Biological Systems for Biomimetics", in Eddie Y K Ng and Yuehao Luo (ed.) Bio-Inspired Surfaces and Applications. Singapore: World Scientific, pp. 325-392. ISBN 978-981-4704-48-9 <!--a href="https://worldscientific.com/doi/10.1142/9789814704496_0010" target="_blank">&gt;&gt;LINK</a--></li>
                </ol>

                <span class="bold-a">Journal & Conference</span>
                <ol>
                    <li>Gerico Vidanes, David Toal, Xu Zhang, Andy Keane. (2024) "Point-based Graph Neural Networks for Semantic Feature Recognition in Computer-aided Design/Engineering". Journal of Computer-Aided Design, 166 (C), doi: 10.1016/j.cad.2023.103629 <!--a href="https://www.sciencedirect.com/science/article/pii/S0010448523001616" target="_blank">&gt;&gt;LINK</a--> <!--a href="https://dl.acm.org/doi/10.1016/j.cad.2023.103629">&gt;&gt;LINK</a--></li>

                    <li>Thomas Weichlein, Shujun Zhang, Pengzhi Li, Xu Zhang. (2023) "Data Flow Control for Network Load Balancing in IEEE Time-Sensitive Networks for Automation", IEEE Access 11(1), doi: 10.1109/ACCESS.2023.3243286 <!--a href="https://ieeexplore.ieee.org/document/10040635">&gt;&gt;LINK</a--></li>

                    <li>David J.J. Toal, Xu Zhang, Andy J. Keane, Chin Yik Lee, Marco Zedda. (2020) "The Potential of a Multi-fidelity Approach to Gas Turbine Combustor Design Optimization". Journal of Engineering for Gas Turbines and Power, Vol.143 (5), doi: 10.1115/1.4048654 <!--a href="https://asmedigitalcollection.asme.org/gasturbinespower/article-abstract/143/5/051002/1087604/The-Potential-of-a-Multifidelity-Approach-to-Gas?redirectedFrom=fulltext" target="_blank">&gt;&gt;LINK</a--> </li>

                    <li>K. Nagabandi, S. Mills, X. Zhang, D. J. J. Toal, A. J. Keane (2017) "Surrogate-based Design Optimisation of Combustor Tile Cooling Feed Holes", Proceedings of the 2017 Gas Turbine India Conference (GTIndia2017), 7-8th December, Bangalore, India <!--a href="https://asmedigitalcollection.asme.org/GTINDIA/proceedings-abstract/GTINDIA2017/58509/V001T03A007/243914" target="_blank">&gt;&gt;LINK</a--></li>

                    <li>Xu Zhang, David J.J. Toal, Andy J. Keane, Simon Stow, Marco Zedda (2017) "Combustor Design Optimization Using the Prometheus Design System", 23rd International Society of Air-breathing Engines (ISABE17), 03-08 Sep, 2017, Manchester, UK <!--a href="https://eprints.soton.ac.uk/413785/" target="_blank">&gt;&gt;LINK</a--></li>

                    <li>Xu Zhang, David J.J. Toal, Neil W. Bressloff, Andy J. Keane, Frederic Witham, Jonathan Gregory, Simon Stow, Christopher Goddard, Marco Zedda, Mark Rogers. (2016) "Isothermal Combustor Prediffuser & Fuel Injector Feed Arm Design Optimization Using the Prometheus Design System", Journal of Engineering for Gas Turbines and Power, Vol.138(6), pp.1-19. doi:10.1115/1.4031711 <!--a href="https://asmedigitalcollection.asme.org/gasturbinespower/article-abstract/138/6/061504/374172/Isothermal-Combustor-Prediffuser-and-Fuel-Injector?redirectedFrom=fulltext" target="_blank">&gt;&gt;LINK</a--> </li>

                    <li>Xu Zhang, David J.J. Toal, Neil W. Bressloff, Andy J. Keane, Frederic Witham, Jonathan Gregory, Simon Stow, Christopher Goddard, Marco Zedda, Mark Rogers (2014). "Prometheus: A Geometry-centric Optimisation System for Combustor Design", Proceedings of ASME Turbo Expo 2014: Turbine Technical Conference and Exposition, 16-20th June, 2014, Düsseldorf, Germany <!--a href="https://asmedigitalcollection.asme.org/GT/proceedings-abstract/GT2014/45684/V04AT04A061/235003" target="_blank">&gt;&gt;LINK</a--></li>

                    <li>Xu Zhang, Shujun Zhang, Kevin Hapeshi (2013). "A New Parameterised Feature-based Generic 3D Human Face Model for Emotional Bio-robots", Applied Mechanics and Materials, Vol.461, pp.838-847 <!--a href="https://www.scientific.net/AMM.461.838" target="_blank">&gt;&gt;LINK</a--> </li>

                    <li>Xu Zhang, Leran Wang, David Toal, Andy Keane (2013). "Design Automation using NX Open: Applications in Prometheus and E-BREAK". Rolls-Royce 11th ADOS Conference, 18-19th September, Derby, UK.</li>

                    <li>Xu Zhang, Shujun Zhang, Kevin Hapshi (2013). "A feature-based 3D human face model for emotional bio-robots". 4th International Conference of Bionic Engineering (ICBE'13), 13-16th August, Nanjing, China.</li>

                    <li>David J.J. Toal, Xu Zhang, Neil W. Bressloff, Andy J. Keane (2012). "Prometheus: Embedding Knowledge & Best Practice within CAD for Combustor Design Optimisation". Rolls-Royce 10th ADOS Conference, 13-14th September, Winchester, UK.</li>

                    <li>Xu Zhang, Shujun Zhang, Kevin Hapeshi (2010). “A new method for face detection in colour images for emotional bio-robots”. Science China - Series E: Technological Sciences. Vol. 53(11). pp. 2983- 988 <!--a href="https://link.springer.com/article/10.1007/s11431-010-4132-z" target="_blank">&gt;&gt;LINK</a--></li>

                    <li>Xu Zhang, Shujun Zhang (2010). "Face detection in colour images based on skin colour model and eye detection". Proceeding of 3rd International Conference of Bionic Engineering, 14-16th September, Zhuhai, China.</li>
                </ol>
            </article>`);
}

// to avoid reveal personal information, put the goto top button in this js file
// and remove the other js completely in the public repository
// When the user scrolls down 50px from the top of the document, show the button
let mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}