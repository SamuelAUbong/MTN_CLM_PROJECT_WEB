/**
* JetBrains Space Automation
* This Kotlin-script file lets you automate build activities
* For more info, see https://www.jetbrains.com/help/space/automation.html
*/

job("Fail after 15 min") {
    container(image = "hello-world")

    failed {
        test failed {  enabled = false  }
        nonzero exit code { enabled = false }
        out of memory { enabled = false }
        timeOut {
            runningTimeOutInMinutes = 15
        }
    }
}