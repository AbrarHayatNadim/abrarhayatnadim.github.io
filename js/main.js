// Loader Animation
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loader-wrapper').classList.add('fade-out');
    }, 500);
});

// Tab Navigation
document.addEventListener('DOMContentLoaded', () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    // Load initial content
    loadTabContent('experience');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and panes
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            // Add active class to clicked button
            btn.classList.add('active');

            // Load corresponding content
            const tabId = btn.dataset.tab;
            loadTabContent(tabId);
        });
    });
});

// Function to load tab content
function loadTabContent(tabId) {
    const tabPane = document.getElementById(tabId);
    
    // Show loading state
    tabPane.innerHTML = '<div class="loader" style="margin: 2rem auto;"></div>';
    tabPane.classList.add('active');

    // Fetch content based on tab
    setTimeout(() => {
        switch(tabId) {
            case 'experience':
                tabPane.innerHTML = getExperienceContent();
                break;
            case 'projects':
                tabPane.innerHTML = getProjectsContent();
                break;
            case 'skills':
                tabPane.innerHTML = getSkillsContent();
                break;
            case 'education':
                tabPane.innerHTML = getEducationContent();
                break;
        }
    }, 300); // Simulate loading for smooth transition
}

// Experience Content
function getExperienceContent() {
    return `
        <div class="content-card">
            <div class="card-header">
                <h3 class="card-title">Senior RPA Developer</h3>
                <span class="card-date"><i class="fas fa-calendar"></i> Sep'23 - Present</span>
            </div>
            <div class="card-subtitle">Reliable Business Technologies Sdn Bhd</div>
            <span class="company-badge"><i class="fas fa-map-pin"></i> Kuala Lumpur, Malaysia</span>
            <ul class="custom-list">
                <li><i class="fas fa-circle"></i> <strong>Finance Automation:</strong> Automated Order-to-Cash & B2B billing; integrated UiPath with Dynamics 365 for invoice extraction, payment execution & GL entries.</li>
                <li><i class="fas fa-circle"></i> <strong>Merchandising:</strong> Automated competitor price fetching for price match decisions; streamlined PO creation & voucher tracking.</li>
                <li><i class="fas fa-circle"></i> <strong>HR & IT Operations:</strong> Developed bots for leave document matching, employee onboarding, ticketing automation, and ERP error trackers.</li>
            </ul>
        </div>

        <div class="content-card">
            <div class="card-header">
                <h3 class="card-title">Senior RPA Developer & Business Analyst</h3>
                <span class="card-date"><i class="fas fa-calendar"></i> Oct'20 - Aug'23</span>
            </div>
            <div class="card-subtitle">Technometrics</div>
            <span class="company-badge"><i class="fas fa-map-pin"></i> Dhaka, Bangladesh</span>
            <ul class="custom-list">
                <li><i class="fas fa-circle"></i> Implemented automated bot for Mutual Trust Bank IT operation (EOD/BOD process).</li>
                <li><i class="fas fa-circle"></i> <strong>Healthcare:</strong> Automated extraction and mapping of patient invoice data into PACS machines.</li>
                <li><i class="fas fa-circle"></i> <strong>Insurance:</strong> Led account reconciliation automation for claims and premium audits.</li>
                <li><i class="fas fa-circle"></i> Developed interactive dashboard from scraped data in ELK (Kibana) for link analysis.</li>
            </ul>
        </div>

        <div class="content-card">
            <div class="card-header">
                <h3 class="card-title">Web Developer</h3>
                <span class="card-date"><i class="fas fa-calendar"></i> Apr'18 - Oct'20</span>
            </div>
            <div class="card-subtitle">Ranx (Startup)</div>
            <span class="company-badge"><i class="fas fa-map-pin"></i> Dhaka, Bangladesh</span>
            <ul class="custom-list">
                <li><i class="fas fa-circle"></i> Built dynamic websites and internal dashboards using PHP, JavaScript, and SQL.</li>
                <li><i class="fas fa-circle"></i> Developed scraper bots for publicly available data using PHP (XPATH), Selenium, and Python.</li>
            </ul>
        </div>
    `;
}

// Projects Content
function getProjectsContent() {
    return `
        <div class="content-card">
            <h3 class="card-title">Finance Order-to-Cash Automation</h3>
            <span class="company-badge">Retail & Banking · The food Purveyor Sdn Bhd</span>
            <p style="margin: 0.5rem 0;">Automated end-to-end reconciliation by integrating bank statements, POS data, credit/debit card processors, and ERP systems using UiPath, SQL, and Dynamics 365.</p>
            <span class="achievement-badge">Reduced time from hours to minutes</span>
            <div class="project-tags">
                <span class="project-tag">UiPath</span>
                <span class="project-tag">Dynamics 365</span>
                <span class="project-tag">SQL</span>
                <span class="project-tag">PDF Extractor</span>
            </div>
        </div>

        <div class="content-card">
            <h3 class="card-title">End-to-End Invoice Automation</h3>
            <span class="company-badge">64,000+ invoices/month</span>
            <p style="margin: 0.5rem 0;">Extracted, validated, and processed trade and non-trade invoices using UiPath + D365 integration.</p>
            <span class="achievement-badge">95% manual work reduction</span>
            <div class="project-tags">
                <span class="project-tag">UiPath</span>
                <span class="project-tag">Dynamics 365</span>
                <span class="project-tag">OCR</span>
            </div>
        </div>

        <div class="content-card">
            <h3 class="card-title">Purchase Order & Approval Process</h3>
            <span class="company-badge">Merchandising & Finance</span>
            <p style="margin: 0.5rem 0;">Automated PO creation from SharePoint to Dynamics 365 with real-time inventory updates. Automated non-trade purchase invoice approval.</p>
            <span class="achievement-badge">30-40% overstock reduction</span>
            <span class="achievement-badge">60-70% faster approval</span>
            <div class="project-tags">
                <span class="project-tag">Power Automate</span>
                <span class="project-tag">UiPath</span>
                <span class="project-tag">SharePoint</span>
            </div>
        </div>

        <div class="content-card">
            <h3 class="card-title">Bank End-of-Day (EOD) Automation</h3>
            <p style="margin: 0.5rem 0;">Designed and implemented EOD/BOD processing system across all bank branches.</p>
            <span class="achievement-badge">80%+ time reduction</span>
            <div class="project-tags">
                <span class="project-tag">UiPath</span>
                <span class="project-tag">Orchestrator</span>
            </div>
        </div>

        <div class="content-card">
            <h3 class="card-title">Internal Audit & Compliance Portal</h3>
            <p style="margin: 0.5rem 0;">Created portal using UiPath, Express.js, Node.js, MySQL, and REST APIs for 55 outlets.</p>
            <div class="project-tags">
                <span class="project-tag">Node.js</span>
                <span class="project-tag">Express</span>
                <span class="project-tag">MySQL</span>
                <span class="project-tag">REST APIs</span>
            </div>
        </div>

        <div class="content-card">
            <h3 class="card-title">Insurance Premium Payment Reconciliation</h3>
            <p style="margin: 0.5rem 0;">Streamlined insurance premium payment reconciliation for finance team.</p>
            <span class="achievement-badge">70% manual effort cut</span>
            <div class="project-tags">
                <span class="project-tag">UiPath</span>
                <span class="project-tag">Excel</span>
            </div>
        </div>
    `;
}

// Skills Content
function getSkillsContent() {
    return `
        <div class="skills-grid">
            <div class="skill-category">
                <h3>Automation Tools</h3>
                <div class="skill-items">
                    <span class="skill-item">UiPath</span>
                    <span class="skill-item">Orchestrator</span>
                    <span class="skill-item">Document Understanding</span>
                    <span class="skill-item">Power Automate</span>
                    <span class="skill-item">Excel Macros</span>
                    <span class="skill-item">REST APIs</span>
                    <span class="skill-item">OCR</span>
                    <span class="skill-item">Power Query</span>
                </div>
            </div>

            <div class="skill-category">
                <h3>Programming Languages</h3>
                <div class="skill-items">
                    <span class="skill-item">VB.NET</span>
                    <span class="skill-item">C#</span>
                    <span class="skill-item">SQL</span>
                    <span class="skill-item">JavaScript</span>
                    <span class="skill-item">Python</span>
                    <span class="skill-item">PHP</span>
                </div>
            </div>

            <div class="skill-category">
                <h3>ERP Systems</h3>
                <div class="skill-items">
                    <span class="skill-item">Microsoft Dynamics 365</span>
                    <span class="skill-item">Oracle ERP</span>
                    <span class="skill-item">SAP</span>
                    <span class="skill-item">Custom ERP</span>
                </div>
            </div>

            <div class="skill-category">
                <h3>Data & Reporting</h3>
                <div class="skill-items">
                    <span class="skill-item">MySQL</span>
                    <span class="skill-item">MSSQL Server</span>
                    <span class="skill-item">Power BI</span>
                    <span class="skill-item">Kibana</span>
                    <span class="skill-item">ELK Stack</span>
                    <span class="skill-item">IBM i2</span>
                </div>
            </div>

            <div class="skill-category">
                <h3>Project Management</h3>
                <div class="skill-items">
                    <span class="skill-item">Agile</span>
                    <span class="skill-item">JIRA</span>
                    <span class="skill-item">PDD/SDD</span>
                    <span class="skill-item">Requirements Analysis</span>
                </div>
            </div>

            <div class="skill-category">
                <h3>Industry Domains</h3>
                <div class="skill-items">
                    <span class="skill-item">Finance</span>
                    <span class="skill-item">Healthcare</span>
                    <span class="skill-item">Insurance</span>
                    <span class="skill-item">Manufacturing</span>
                    <span class="skill-item">Retail</span>
                    <span class="skill-item">IT Operations</span>
                </div>
            </div>
        </div>
    `;
}

// Education Content
function getEducationContent() {
    return `
        <div class="content-card edu-card">
            <i class="fas fa-graduation-cap edu-icon"></i>
            <h3 class="edu-degree">Bachelor's Degree in Computer Science</h3>
            <p class="edu-school">University of Chittagong</p>
            <span class="edu-gpa">GPA: 3.24</span>
        </div>

        <div class="content-card">
            <h3 class="card-title">Languages</h3>
            <div style="display: flex; gap: 2rem; margin-top: 1rem;">
                <div><strong>English</strong> <span class="company-badge">Fluent</span></div>
                <div><strong>Bengali</strong> <span class="company-badge">Native</span></div>
            </div>
        </div>

        <div class="content-card">
            <h3 class="card-title">Certifications</h3>
            <ul class="custom-list">
                <li><i class="fas fa-certificate"></i> Certified UiPath RPA Developer</li>
                <li><i class="fas fa-certificate"></i> Power Automate Advanced</li>
            </ul>
        </div>

        <div class="content-card">
            <h3 class="card-title">Location</h3>
            <p><i class="fas fa-map-pin"></i> Palm Spring, Kota Damansara, Petaling Jaya, Selangor, 47810, Malaysia</p>
        </div>
    `;
}