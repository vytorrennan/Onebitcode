let jobs = Array({jobName: "a", jobDesc: "aeiou", jobLimit: "20/02", candidates: Array("Jonas", "Elvin", "Matias", "Godãozão", "Juliano")}, {jobName: "b", jobDesc: "beleia", jobLimit: "30/03", candidates: Array("Junaldo", "Radir")});


function availableJobs() {
    let stringOfJobs = "";
    jobs.forEach(function (element, index) {
        stringOfJobs += "-Index: " + index + ", Name: " + element.jobName + ", Candidates: " + element.candidates.length + "\n";
    })
    window.alert(stringOfJobs);
}

function newJob() {
    let job = Object()
    job.jobName = window.prompt("Enter the name of the job: ");
    job.jobDesc = window.prompt("Enter a brief description: ");
    job.jobLimit = window.prompt("Enter the date limit: ");
    job.numcandidates = 0;
    job.candidates = Array();

    const isSure = window.confirm("Name: " + job.jobName + "\nDescription: " + job.jobDesc + "\nLimit: " + job.jobLimit + "\n\n Are these information correct?");

    if (isSure) {
        jobs.push(job);
    } else {
        window.alert("No information was saved, going back to the menu!");
    }
}

function checkJob() {
    const indexJob = parseFloat(window.prompt("Enter the index of the job: "));
    const selectedJob = jobs.filter(function (element, index) {
        return index === indexJob;
    })
    if (selectedJob.length === 0) {
        return window.alert("The index was not found");
    }

    /*
    const candidatesOfSelectedJob = selectedJob[0].candidates.map(function (candidate) {
        return candidate + ", ";
    })
    */
    
    window.alert("Name: " + selectedJob[0].jobName + "\nDescription: " + selectedJob[0].jobDesc + "\nLimit: " + selectedJob[0].jobLimit + "\nNumber of candidates: " + selectedJob[0].candidates.length + "\nCandidates: " + selectedJob[0].candidates);
}

function newCandidate() {
    const candidateName = window.prompt("Enter the name of the candidate: ");
    const jobIndex = parseFloat(window.prompt("Enter the index of the job: "));

    isSure = window.confirm("Cadidate's name: " + candidateName + "\nName: " + jobs[jobIndex].jobName + "\nDescription: " + jobs[jobIndex].jobDesc + "\nLimit: " + jobs[jobIndex].jobLimit + "\nNumber of candidates: " + jobs[jobIndex].candidates.length + "\nCandidates: " + jobs[jobIndex].candidates + "\nAre you sure?")

    if (isSure) {
        jobs[jobIndex].candidates.push(candidateName);
    } else {
        window.alert("No candidate registered, going back to the manu!");
    }
}

function deleteJob() {
    const jobIndex = parseFloat(window.prompt("Enter the index of the job: "));

    isSure = window.confirm("\nName: " + jobs[jobIndex].jobName + "\nDescription: " + jobs[jobIndex].jobDesc + "\nLimit: " + jobs[jobIndex].jobLimit + "\nNumber of candidates: " + jobs[jobIndex].candidates.length + "\nCandidates: " + jobs[jobIndex].candidates + "\nAre you sure?")

    if (isSure) {
        jobs.splice(jobIndex, 1);
    } else {
        window.alert("No job was deleted, going back to the manu!");
    }
}

function menu() {
    let selectedOption = "";
    do{
        selectedOption = parseFloat(window.prompt("Select an option:\n1-List all available jobs\n2-Register a new job\n3-Check job\n4-Subscribe as a candidate for a job\n5-Delete a job\n6-Finish program"));
    
        switch(selectedOption){
            case 1:
                availableJobs();
                break;
            case 2:
                newJob();
                break;
            case 3:
                checkJob();
                break;
            case 4:
                newCandidate();
                break;
            case 5:
                deleteJob();
                break;
            case 6:
                window.alert("Finishing program...");
                break;
            default:
                window.alert("Invalid option!");
        }
    }while(selectedOption !== 6);
}

menu();
