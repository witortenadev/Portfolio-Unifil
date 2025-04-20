const reportContainer = document.getElementById("reportContainer");

async function renderReports() {
    const res = await fetch("/reports")
    const reports = await res.json()
    reports.forEach(async report => {
        const reportURL = `./report?reportId=${encodeURIComponent(report)}`
        const reportElement = document.createElement("div")
        reportElement.className = "report card"
        reportElement.href = reportURL
        const imageSrc = await renderImage(report);
        const reportContentRes = await fetch(`/reports/${report}`)
            .then(res => res.text())
            .catch(err => console.error(err))
        const reportContent = marked.parse(reportContentRes.split('\n').slice(0, 6).join('\n'))
        reportElement.innerHTML = `
            <a href="${reportURL}">
                <p>${report.split('.')[0]}</p>
                <img src="${imageSrc}" alt="Report Image">
                <p>${reportContent}</p>
            </a>`
            
        reportContainer.appendChild(reportElement)
    });

    async function renderImage(reportId) {
        const res = await fetch(`/reports/image/${reportId}`)
        const image = await res.blob()
        const imageURL = URL.createObjectURL(image)
        return imageURL
    }
}
renderReports();