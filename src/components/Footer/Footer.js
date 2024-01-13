import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
        <p>À la mode</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footer-social-icon'>
            <div className='footer-icons-container'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAA5hJREFUWEftl1moTmEUhp9jDLkhY5RkJlNJpAyRKbkwS5JQppKhkHmIEJIhUxKZiVKEkDKFzFMoRRQukczfq7X1+c7+996/38W5sOp0zv/t9a39nrXe9a71F1HCrKiE4eE/oLSK5JOhFkAboB5QOi2wPf8GPAduAvey3MkCaBiwCGiQJWCCzxNgDnAgKU4SoFrATqBHgUDC66dd1kYBr+LiJgE6CfS0S5eAHcANS/2XjCDLA62A9sAEoIndOwH0yQfQAOCQXZgNLMsIIMmtHLAWGG9OA4HD4YVcGVK9xRnVe0gBYLoCw4EawHHL8nWgJfDYy9jvV8QBagbcN4/OwIUCAE0E1gdlGgHssrO6wEs/fhwgv1xKcy6+VAamAR2A1sAP4BZwBVgJfLDs7rMXqkFEZmVeFZD1s8wlZkg13gi8A6rlyE5368DaOZ6/AEYC511pJBvVLetnHNhKwHu7pwzqXYmAZgArgKdAw5gXdgHOeedngTtAGcc5lbub96yTk42LQQxV5budzQKWpwGaa0J418jn+6tMD4A6lkERVrrim6RiD1DFVLo58DHw+WpqP8/9XpwGaIHjw3xA3dAuCDQG2Gpn0hHpSZyppQ/aA5UuInHkK14qo5kALTRHkVOE9W07MNoJ5mWgYw4w0bHml8i+yUTRd//ktE2imQmQ5pbKdtsC+oEemnaolSenANoCjM0RRx1Y0aihavy2uLaPSvYIaBq8VGeNXfdtcByalAJos5tX44xz4pFv6jJ1m/ijLGUCJPKGgfYCQ01rwnKG+KRJmmPij3jkm0hewR3onxdF/hrQTG+uFRM1L+5gl9399nkqsCYA9Bkoa9RYkgZINRXyuJLVtGlfFXjrtEpj4FTwst5OjXdb27826ZDIRlbKAdHiJis2uOM4JKelwLMcS1mvoN2ThFEi6YuoQIjMIrVMo2d1Wob+9egIueWPDu1IkoVEDvV37X7UhqW0Imm4asxo+dKurXEQDtcQjD7Xt+zrbw3yI2mAtNVJb2SFrh9xgPz1Q18colXnl2/agibCRmtsXPB8zzQurpngvrHF7Y8YuQD19fYU6YR+tO8UYuEKG7saJy35Wl8HGYKrbsJvsyVfW4CmdRaLlnwN6Sle1ypG27g4SYDUnqu8pTwLgCw+2gLUXb42JXZZGFQcWud2nEZZ3pbgo4VvuuvIY0lxsnxzje6XmK/SBSYmv+v5ZCi/yH/p/R9QWuJ+ArGquSWsrGisAAAAAElFTkSuQmCC"/>            </div>
            <div className='footer-icons-container'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAxFJREFUWEftl1nITVEUx3+f+cGYJClDiSiFRBKFQpQUD2bJkAdkSIQHUjKLxAsSyfxEiSShkAzxogwhMwmRkmn/a53ajnPuPvfc8+U+fOvp3HX3Xut/1vqv4dRQZVJTZXioAxTKSKURagT0ADoB3YFPwCvgNvAk5Dzp/zyAdGciMB0YCjRIcXzLAd0P7AJ+ZgVXLqAuLiLHgN5ZHQB3DPzdLHfKATQCOA40M8O/gXOAInEfeAY0cc8TgMmxyL0DegEvQ6CyAhoFnALqmcFrzvgc4F6Kg3bACmCe9/9VYDDwoxSoLIBkXBFoboZ2AgsARSgki11Et3iHxL0jlQLaDCwxIxeBIZ7BfvbWZ1OipSp8DrSxO6q+PpUAqg8o/63MiHgk3kjGAictjb8M6KUEZ7uBuZ6+fSkuhVLWHxBfJG8ApU+pEnnVZ9p6jva6aMxKADQf2OHpBwFX0qIUAjQOOGGXReox9jwcUJp82QaIM3GZCezxlFOAQ3kBTQUO2OWDwDR79vWR7UnA4QRHS4GNnn68pToRUyhCw4DzdlPcEYckI4EzMYtK39sEL/uAGZ5+gEeDf46HALV2veS93foOiJD63cKV/gevL5WqHnXonp7nljbzckVIl1Q5IqJkA7DcSP0RaGz61cCaBA+dXZofe/qbQN80/kgfipDODAQu29lHgOZZPGUiu0gfl60uGos85ULXQrZXCkj3NZs2WWWJD+uBZQGiKhLXvbS+tpf5WgSgyIbGx2cjpXpUJOoragXfTKFt4AIgvkSSVoV/4cuSsvgLNQXEH3VxX14AD4GGgEaKvyepHQhQUPIAGu2IedqzrNStSwAYHdGSNjs05aPDeQCtdcZXmYEv1gKUPm2G2nkk2hDVv0TqaPYFo6MDeQCpIarKJOKJmmdhkgeQhmpHQ7DS0vXfAGnKR5UkEF1dS3hQGJocKevg5tJTA3DDqqlIPGVzqJutswKhZf5ooWhyREjDVSuphqk6sTbFQqVcUmuY6utU5a3Fv3ApF5AA6GtV5V4rkgdQrQCJjNYBCoW36iL0B+7MgiV//1cHAAAAAElFTkSuQmCC"/>            </div>
            <div className='footer-icons-container'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAA/JJREFUWEftl1esT1kUxn9mGKMkWgYPOokSTAjRhSCiJVqYkWhhRCcSL0RCCOGBaCF6m8GDIJmS0UW0SESNFx70XqP3/ck6sp172v/el/tgv9x7/mevvb7zrbW+tXYRCtkqUsjw8B1QWkQKwlBxoCVQBagMFAXuADeAk8DzNOdR7/MDqD8wFOgElIhx+h44BGwBNgGfsoLLBVBzYImx4p//yFh5DdQAKoacnwHGA0ezgMoK6Ddgs4VF514G1ttv10OOSgPtgJ7AH0AxY2gisCwNVBZA+rqldtBtYIZjYoP7+yHtcKAqsALoYXsXAVOS7NIAdQX+gy/ycBDoBzzOAMTf8oMxM8Z+nAwsjjsjCVBt4CxQCtgHCNzHHMH429cAIyx8OmtvrlW2A+jr8uAm0MhjRh/RGrjmHITzJwmvckkstwEUehXA27BBHEPSl+O2uRfwt/0v7VE56/0JoFWOjNV1YT9viT7S5djarIBWWYXIeUfPaCyw3HtubA5ywSV7nSMZaJsF0I/AXVdZFcxQVRKsf4Du3vNKtzdI1qygOnv5UxZ46htGhUz5cs42Kc5XPYOdQG/vWaFUSHNZP1k+ljT2FYWvKwpQ8AWSfxn7sj8VWGDWSvamjsV7uaCxvapehXuwtZdEQFLlreaoUshZeVPpctZIq0dVSgaARyx/pruPnpvG0CDgT6eoz4AyEYdLS6QpWlJwtYRc1zGrUKn+nDRA3YB/bdMvrjE+iPD2F/C7/a7EnhRiarixrIYbtZSX1Uwo16UBquVie8U2SWekN+ElkVNL0QiidcqFcDRw2hhTa3hiTM8PCahYfwiomqXYe9IAKdHFivJllts8M+YrlUf7gSbeew1mvwI/e79dAhp4z0OAjcaopOWbQS5OqdXNNYTdt4kwj8SbAyn3QtOruDxS+INurz1BQkdKRhyg9k4jDpsHAdPUl7TqO/DjLCd8dqRnmouCntfFC1EfYFf40KRur0bYwXqX3z6SgGkyEAABFLuqxjdmICFUril8kW1D+5IAybgZMM/Fe1oKQ1lebwMGAhLcFlYAeeziAKnHaFbWe1XSgSweY/ZopNX4G7ScPOqcVmV6P8DRvh14ZeKoFqISVThUNerYL1NA6mMksrNdVdW0vapYVW7simNotbtJaF7RIHXBmqDuXcGSimsKEOiLIVHUHU1AhtlgF9hoNvdHl0hQcYBUFboA+ktNVsNVQ0BzcrA01uoWIiEUE1J3f8lmgle1icRGAapnYZGhBHK35ZD0RE7FwCjTnnDzDZy9s+pUTyzwRVFaoer6P64SzKs+RtecOlbmKnldpW/Z+PsiP4WQdg3Kz5kFsvkOKI2+QsfQZ+jWviUaT+1zAAAAAElFTkSuQmCC"/>                </div>
        </div>
        <div className='footer-copyright'>
            <hr/>
            <p>Copyright @ 2024 - All right reserved</p>
        </div>
    </div>
  )
}

export default Footer