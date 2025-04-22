const reportContainer = document.getElementById("reportContainer");

async function renderReports() {
    const res = await fetch("NPI-reports")
    const reports = await res.json()
    reports.forEach(async report => {
        const reportURL = `./report?reportType=NPI&reportId=${encodeURIComponent(report)}`;
        const reportElement = document.createElement("div")
        reportElement.className = "report card"
        const imageSrc = await renderImage(report);
        const reportContentRes = await fetch(`NPI-reports/${report}`)
            .then(res => res.text())
            .catch(err => console.error(err))
        const reportContent = marked.parse(reportContentRes.split('\n').slice(0, 6).join('\n'))
        reportElement.innerHTML = `
            <a href="${reportURL}">
                <div class="padded-container">
                    <p>${report.split('.')[0]}</p>
                </div>
                ${imageSrc != null ? `
                        <div class="image-container">
                             <img src="${imageSrc}" alt="Report Image"></img>
                        </div>
                    ` : ''}
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
        const image = await res.blob()
        const imageURL = URL.createObjectURL(image)
        return imageURL
    }
}
renderReports();
