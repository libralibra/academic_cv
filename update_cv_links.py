"""file to copy the necessary files from the private git
repository to academic_cv directory
Dr Daniel Zhang
June 2024
"""

import os

links = {
    '<link rel="stylesheet" href="../../assets/dist/css/reveal.css">': '<link rel="stylesheet" href="./components/reveal.css">',
    '<link rel="stylesheet" href="../../assets/dist/css/cv.css">': '<link rel="stylesheet" href="./components/cv.css">',
    '<script id="pub_list" src="../../assets/dist/js/pub_list.js"></script>': '<script id="pub_list" src="./components/pub_list.js"></script>',
    '<script id="ref_list" src="../../assets/dist/js/ref_list.js"></script>': '<script id="ref_list" src="./components/ref_list.js"></script>',
    '<script src="../../assets/dist/js/cv.js"></script>': '<script src="./components/cv.js"></script>',
    #  '<button id="phone_btn_me"': '<!-- <button id="phone_btn_me"',
    #  'Reveal Number</button>': 'Reveal Number</button> -->',
    #  '<button id="email_btn_me"': '<!-- <button id="email_btn_me"',
    #  'Reveal Email</button>': 'Reveal Email</button> -->'
    '<button id="email_btn_me" onclick="revealInfo(': '<!--button id="email_btn_me" onclick="revealInfo(',
    'id="email_me"></span>': 'id="email_me"></span-->',
    '<button id="phone_btn_me" onclick="revealInfo(': '<!--button id="phone_btn_me" onclick="revealInfo(',
    'id="phone_me"></span>': 'id="phone_me"></span-->',
    # get rid of the personal email icon
    '<span class="print-show"><a class="fa fa-envelope fa-2x" aria-hidden="true" href="mailto:xenos.z@outlook.com" title="Email Me" alt="Email Me" style="cursor: pointer"></a></span>': "",
}


def update_html(fname, old_str, new_str):
    with open(fname, "r", encoding="utf-8") as f:
        content = f.read()
    if old_str in content and new_str not in content:
        print(f".. replacing [{old_str}]")
        content = content.replace(old_str, new_str)
    with open(fname, "w", encoding="utf-8") as f:
        f.write(content)


def update_cv_links(cv_dir):
    for file in os.listdir(cv_dir):
        if file.endswith(".html"):
            print(f"processing: {file}")
            for old_str, new_str in links.items():
                update_html(file, old_str, new_str)


if __name__ == "__main__":
    cv_dir = r"d:\GitHub\academic_cv"
    update_cv_links(cv_dir)
