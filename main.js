import { Member } from './member.js';

class Main
{
    constructor()
    {
        this.memberHolder = document.getElementById('member-holder');
        this.departmentFilter = document.getElementById('department-filter');
        this.members = [];

        this.departmentFilter.addEventListener('change', () => this.render());
    }

    async initialize()
    {
        const teamFile = await fetch('./team.json');
        const teamData = await teamFile.json();

        teamData.forEach((memberData) =>
        {
            const member = new Member(
                memberData.name,
                memberData.position,
                memberData.department,
                memberData.available
            );

            this.members.push(member);
        });

        this.populateDepartmentFilter();
        this.render();
    }

    populateDepartmentFilter()
    {
        const departments = [...new Set(this.members.map((member) => member.department))]
            .sort((first, second) => first.localeCompare(second));

        departments.forEach((department) =>
        {
            const option = document.createElement('option');
            option.value = department;
            option.textContent = department;
            this.departmentFilter.appendChild(option);
        });
    }

    render()
    {
        const selectedDepartment = this.departmentFilter.value;
        const visibleMembers = selectedDepartment
            ? this.members.filter((member) => member.department === selectedDepartment)
            : this.members;

        this.memberHolder.replaceChildren();
        visibleMembers.forEach((member) =>
        {
            member.Render(this.memberHolder);
        });
    }
}

const app = new Main();
app.initialize();
