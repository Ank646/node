import pyttsx3
eng=pyttsx3.init()

voice=eng.getProperty('voices')
for v in voice:
    print(v)
eng.setProperty('voices',voice[0].id)
eng.say("Hi how are you")
eng.setProperty('voices',voice[1].id)
eng.say("Hi how are you")
eng.runAndWait()