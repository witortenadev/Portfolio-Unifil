const reportContainer = document.getElementById("reportContainer");

async function renderReports() {
    const res = await fetch("NPI-reports")
    const reports = await res.json()
    reports.forEach(async report => {
        const reportURL = `./report?reportType=NPI&reportId=${encodeURIComponent(report)}`
        const reportElement = document.createElement("div")
        reportElement.className = "report card"
        reportElement.href = reportURL
        const imageSrc = await renderImage(report);
        const reportContentRes = await fetch(`NPI-reports/${report}`)
            .then(res => res.text())
            .catch(err => console.error(err))
        const reportContent = marked.parse(reportContentRes.split('\n').slice(0, 6).join('\n'))
        reportElement.innerHTML = `
            <a href="${reportURL}">
                <div class="padded-container">
                    <p>${report.split('_')[1].replace("-", "/").replace("-", "/")}</p>
                </div>
                ${imageSrc != null ?
                    await imageRenderer(imageSrc)
                    : ''}
                <div class="padded-container">
                    <p>${reportContent}</p>
                </div>
            </a>`

        reportContainer.appendChild(reportElement)
    });

    async function renderImage(reportId) {
        const res = await fetch(`NPI-reports/image/${reportId}`)
        if (!res.ok) {
            return null
        }
        const imageData = await res.json()
        const imageSrc = imageData[0].path
        return imageSrc
    }

    async function imageRenderer(path) {
        return `
            <div class="image-container">
                 <img src="${path}" alt="Report Image"></img>
            </div>
        `
    }
}
renderReports();
