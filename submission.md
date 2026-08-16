# Project Submission Report

## 1. Student Details

- **Full Name:** Anyango, Jason Meitekini
- **GitHub Username:** jasonAnyango
- **Email:** jason.anyango@strathmore.edu

---

## 2. Deployed Project Link

- **Live GitHub Pages URL:** https://is-project-2026.github.io/court-legends-165782/

---

## 3. Reflection — Grounded in Your Git History

> **Rules:** Every answer below **must include a direct link** to the specific commit, PR, issue, or branch in your repository that demonstrates what you are describing. Answers without working links will not be graded. Generic explanations that could apply to any project will receive zero marks.
>
> **Marks:** A (2 marks) · B (1 mark) · C (1 mark) · D (1 mark) = **5 marks total**

### A. Your Best Commit

Paste the URL of the commit in your history that you think best demonstrates clean conventional commit practice (good type tag, clear subject, meaningful body or footer).

- **Commit URL:** https://github.com/IS-PROJECT-2026/court-legends-165782/commit/c9a7ea0a86e233b39be892c5129600802db7fdae
- **Why this one?** This is my favourite commit because I enjoy debugging, and it involved an error I had never encountered before. I had to investigate why the deployed application was not loading its assets correctly and why refreshing routes resulted in a 404, then resolve both issues with a focused fix. 

### B. A Mistake or Struggle

Link to a commit, PR, or issue where something went wrong — a bad commit message you had to fix, a branch you had to delete and recreate, a PR that needed rework, or a deployment that broke. 

- **Link to the evidence:** https://github.com/IS-PROJECT-2026/court-legends-165782/commit/c1f7d5a7c4bc6c997bf06f0c852ab306e44ed9af
- **What happened and how did you recover?** I initially introduced a syntax error while making a styling fix and did not catch it before the change was merged. I identified the problem during testing, then created a separate fix branch to correct the error and merged the fix after verifying that the application worked correctly.

### C. A Pull Request You're Proud Of

Paste the URL of the PR that best shows your self-review process — one where the description is clear, the issue linkage is correct, and the diff tells a coherent story.

- **PR URL:** https://github.com/IS-PROJECT-2026/court-legends-165782/pull/26
- **What did you check before merging?** This is the PR I'm most proud of because I spent the longest amount of time working on the overall styling and presentation of the application. Before merging, I reviewed the changes across the desktop, tablet, and mobile layouts and checked the player catalogue, profiles, comparison, rivalries, navigation, spacing, and overflow. The PR also clearly documents the changes and links back to Issue #11.

### D. One Thing You Would Do Differently

If you had to restart this project from scratch with everything you know now, name one specific workflow decision you would change (not a code change — a Git/project management decision).

- **What would you change?** I would break the larger features into smaller issues from the beginning, especially the styling and deployment work. This would make the progress easier to track and make it clearer which changes belonged to each issue. Especially the styling
- **Link to the evidence of the original decision:** https://github.com/IS-PROJECT-2026/court-legends-165782/issues/11

---

## 4. Screenshots of Key GitHub Features

Demonstrate your workflow mechanics by embedding your screenshots below.

> **CRITICAL FOR WORKING IMAGES:** Do not type manual folder paths. Edit this file directly on the GitHub web interface, click on the blank line below each prompt, and **paste (Ctrl+V / Cmd+V)** your screenshot. GitHub will automatically upload the file and generate a permanent, working image link for you.

### A. Milestones and Issues
*Provide a screenshot showing your active milestone(s) and the granular tracking issues linked directly to them.*

<img width="1264" height="399" alt="image" src="https://github.com/user-attachments/assets/a798b2ba-b6cb-43bd-9a9a-ea27001dde06" />


* **Caption:** The milestone view shows the project work organized into clear, trackable issues, with each milestone representing a defined stage of the Court Legends development process. From the player showcase in the beginning to the final polish and deployment

### B. Project Board
*Provide a screenshot of your GitHub Project Board with your issues organized dynamically across columns (To Do, In Progress, Done).*

<img width="1118" height="748" alt="image" src="https://github.com/user-attachments/assets/fff8794e-5245-49f4-a9ed-22846c67bb16" />


* **Caption:** Each issue begins in the "To-Do" tab and moves to "In Progress" as I worked on it and finally to "Done" when complete

### C. Branching Architecture
*Provide a screenshot showing your local or remote Git branch list, highlighting your use of conventional, issue-linked naming patterns (e.g., `feat/`, `fix/`, `style/`).*

<img width="661" height="543" alt="image" src="https://github.com/user-attachments/assets/9f8045cf-4bcd-47e2-a3ac-36218518fb43" />


* **Caption:** Each branch tackled a different issue or task in the project. The naming makes it easy to recognize what each branch was meant for 

### D. Pull Requests & Traceability
*Provide a screenshot of a completed or open Pull Request (PR) on GitHub that clearly shows it is linked to a related development issue.*

<img width="1317" height="813" alt="image" src="https://github.com/user-attachments/assets/ec00341c-101a-4f4d-a05d-8bee1dc6fd98" />

* **Caption:** This is a pull request tackling issue #8, where the player comparison feature was implemented and merged into main

---

## 5. Merge Conflict Evidence

You must engineer **three merge conflicts**, each triggered by a **different cause** from those covered in the lecture. For Conflict 1, document the full resolution lifecycle. For Conflicts 2 and 3, provide the conflict marker screenshot and identify the cause.

> **Marks:** Conflict 1 full chronology (2 marks) · Conflict 2 (1 mark) · Conflict 3 (1 mark) · All three use distinct causes (1 mark) = **5 marks total**

---

### Conflict 1 — Full Chronology

**What cause did you use?** Same Line Edit

#### Step 1: Generating the Clash
*Screenshot showing the merge attempt and the conflict warning.*

<img width="1398" height="696" alt="Conflict 1 1" src="https://github.com/user-attachments/assets/d7711c06-4670-475a-9d6a-13d429b63d0a" />

* **Caption:** Branch fix/17-ace-contrast and branch style/18-ace-brand-refresh edited the same line and thus resulted in a conflict

#### Step 2: Inside the Code Editor (Conflict Markers)
*Screenshot showing the raw, unresolved conflict markers (`<<<<<<< HEAD`, `=======`, `>>>>>>>`) in your editor.*

<img width="958" height="411" alt="conflict_evidence_1" src="https://github.com/user-attachments/assets/1d350036-1b2d-45d2-a482-45ea75bb4a99" />

* **Caption:** The same accent colour was being modified by both branches. I picked the branch with the more appealing resulting UI to keep the changes

#### Step 3: Resolution & Clean Merge
*Screenshot of your clean Git history or completed PR showing the conflict was resolved and merged.*

<img width="1308" height="649" alt="image" src="https://github.com/user-attachments/assets/98c317c4-a0ab-4a85-afdc-bb6ac5fd7b31" />

* **Caption:** Conflict resolved and the desired changes merged into main

---

### Conflict 2 — Different Cause

**What cause did you use?** Add/Add Conflict

**Why does this cause trigger a conflict?** This occurs when two commits both add the same file with different contents.

<img width="798" height="317" alt="conflict_evidence_2" src="https://github.com/user-attachments/assets/4fdc037e-d23d-426b-b279-45af82dd3031" />

* **Caption:** Both branches (feat/19-badge-country and feat/20-badge-stat) added a new Badge.jsx component. It is two independent creations of the same path with no shared ancestor, so Git can't infer intent line-by-line.

---

### Conflict 3 — Different Cause

**What cause did you use?** Modify/Delete

**Why does this cause trigger a conflict?** One commit modifies a file while another commit deletes the file entirely. 

<img width="683" height="381" alt="conflict_evidence_3" src="https://github.com/user-attachments/assets/cf8fd598-06e8-49b3-a338-95f3251fca11" />

* **Caption:** Conflicting branches are style/21-footer-copyright and chore/22-remove-footer-component. Both affecting the Footer.jsx component. Resolved by keeping the style branch commit instead of the chore branch commit.

---
##
## 6. Feedback & Evaluation

To help improve this course for future engineering cohorts, please take 2 minutes to fill out the anonymous feedback form. Your honest review helps shape how this program is taught next semester!
- [ ] **Anonymous Evaluation Form:** [Course & Instructor Evaluation](https://forms.gle/YLybnsyXXErKEg3s9)

---
 
## Final Submission
 
Once your repository is complete, submit your work through the official submission form below. The form will **stop accepting responses after Monday, August 17th, 2026** — no late submissions will be accepted.
 
> **Submission Form:** [https://forms.gle/KrT4VxtFtkU3wtYu8](https://forms.gle/KrT4VxtFtkU3wtYu8)
