## 11. Behavioral & Leadership

### Q: Tell me about a time you mentored a junior developer

**Answer Framework (STAR):**

**Situation:**
"When I joined [Company], our team had just hired two junior developers. One in particular was struggling with React patterns and was hesitant to ask questions in our large team channels."

**Task:**
"As the senior developer on the team, I took responsibility for their onboarding and growth. My goal was to get them contributing meaningfully within 3 months while building their confidence."

**Action:**
- "I scheduled weekly 1:1s specifically for technical mentoring, separate from our regular syncs"
- "I started assigning them small features in areas I was familiar with, so I could provide context-rich code reviews"
- "Instead of just fixing issues in reviews, I asked guiding questions: 'What would happen if this component re-rendered frequently?'"
- "I pair-programmed on their first complex feature, thinking aloud to model my problem-solving process"
- "When they made mistakes, I shared times I made similar ones - normalizing the learning process"

**Result:**
"Within 2 months, they were independently handling features. By month 4, they were reviewing others' PRs with insightful comments. They later told me our sessions gave them confidence to speak up in architecture discussions. I learned that mentoring isn't about having answers - it's about asking better questions."

**Senior insight:** Good mentoring answers emphasize: systematic approach, psychological safety, growth over time, what YOU learned. Avoid: vague generalities, taking credit for their success, describing only technical teaching.

---

### Q: How do you balance technical debt vs feature delivery?

**Answer:**

**Framework for Decision Making:**

```
Evaluate debt by:
├── Impact on velocity (slowing future work?)
├── Risk (causing bugs/outages?)
├── Scope (localized or widespread?)
└── Timing (getting worse with time?)
```

**My Approach:**

1. **Quantify the debt**: "This manual process adds 30 minutes per deployment"
2. **Tie to business outcomes**: "Refactoring auth would let us ship SSO in 2 weeks vs 6"
3. **Propose incremental paydown**: "We can refactor as we touch these files"
4. **Negotiate capacity**: "I advocate for 20% of sprint capacity for maintenance"

**Example Answer:**

"In my last role, we had a legacy payment module that was slowing every feature touching checkout. Instead of proposing a full rewrite, I:

1. **Documented the cost** - tracked time spent working around it (40+ hours/quarter)
2. **Identified the 20%** - found three core functions causing 80% of issues
3. **Proposed strangler pattern** - new features use new abstraction, gradually migrate
4. **Got buy-in** - showed PM that fixing it would accelerate Q4 roadmap

We allocated 2 weeks for the critical refactor. Feature velocity improved measurably - checkout features that took 2 sprints dropped to 1. The key was framing debt paydown as enabling business goals, not just engineering preference."

**Red Flags to Avoid:**
- "I just told them we need to fix it" (no business case)
- "We stopped features for a month" (rarely justified)
- "Technical debt is always bad" (sometimes it's strategic)

**Senior insight:** Frame technical debt discussions in business terms: velocity, risk, opportunity cost. Propose incremental approaches. Show you understand that shipping is important - debt isn't inherently bad, unmanaged debt is.

---

### Q: Describe a time you had to push back on a technical decision

**Answer Framework (STAR):**

**Situation:**
"Our team was planning a major feature, and the tech lead proposed using GraphQL to replace our REST APIs. While GraphQL has benefits, I had concerns about the timing and our team's readiness."

**Task:**
"I needed to voice my concerns constructively without derailing the project or damaging my relationship with the tech lead."

**Action:**
- "I first made sure I understood the full proposal by asking clarifying questions in the meeting"
- "Rather than objecting in the group setting, I scheduled a 1:1 with the tech lead"
- "I came prepared with specific concerns backed by data:
  - Our team had no GraphQL experience (learning curve risk)
  - We had a hard deadline in 8 weeks
  - Our existing REST APIs were stable, the pain was mainly in overfetching"
- "I proposed an alternative: use REST for the deadline, prototype GraphQL for a smaller internal tool"
- "I acknowledged the benefits of their proposal and framed my pushback as 'timing' not 'wrong'"

**Result:**
"The tech lead appreciated the thoughtful pushback. We agreed to proceed with REST for the deadline and run a GraphQL pilot afterward. The feature shipped on time. The pilot revealed GraphQL was great for our mobile app but overkill for admin tools. We eventually adopted it selectively rather than wholesale."

**Key Principles:**

| Do | Don't |
|-----|-------|
| Push back privately first | Ambush in meetings |
| Bring data and alternatives | Just say "I don't like it" |
| Focus on project success | Make it personal |
| Acknowledge valid points | Dismiss their idea entirely |
| Frame as "and" not "but" | Create winners and losers |

**Senior insight:** Good pushback requires: (1) timing - early enough to matter, (2) preparation - data and alternatives, (3) framing - about project success, not ego, (4) follow-through - own the outcome of your recommendation. The goal isn't to "win" but to make better decisions as a team.

---

### Q: How do you handle disagreements during code review?

**Answer:**

**My Philosophy:**
Code review disagreements are opportunities for learning, not battles to win. The goal is code quality and team growth, not being right.

**Approach to Disagreements:**

**1. Distinguish Preferences from Requirements:**

```markdown
# This is a REQUIREMENT (blocking):
🔴 "This SQL query is vulnerable to injection - must use parameterized queries"

# This is a PREFERENCE (non-blocking):
🟢 "I'd name this `getUserById` instead of `fetchUser` for consistency,
    but either works. Up to you."
```

**2. Ask Questions Before Asserting:**

```markdown
# Instead of:
❌ "This is wrong. You should use useMemo here."

# Ask:
✅ "I'm curious about the decision not to memoize this computation.
    Have you measured whether it's a performance concern?"
```

**3. Provide Context, Not Commands:**

```markdown
# Instead of:
❌ "Change this to useCallback"

# Explain:
✅ "Since this callback is passed to a memoized child component,
    wrapping it in useCallback would prevent unnecessary re-renders.
    Here's the relevant docs: [link]"
```

**When We Still Disagree:**

1. **Move to synchronous discussion** - Text loses nuance, video/call helps
2. **Timebox the debate** - "Let's discuss for 15 min, then decide"
3. **Look for objective evidence** - Benchmarks, docs, existing patterns in codebase
4. **Defer to domain expert** - If they own that area, weight their opinion higher
5. **Escalate if truly stuck** - Tech lead can break ties, but use sparingly

**Real Example:**

"In one review, a colleague used a class component with lifecycle methods. I suggested converting to hooks. They pushed back - they were more comfortable with classes. Instead of insisting, I:

1. Acknowledged classes were valid and would work
2. Asked if they'd be open to pairing on hooks conversion as a learning exercise
3. They agreed, we converted it together, and they felt ownership of the result
4. The code review became a mentoring moment instead of a conflict"

**Red Flags in Code Review Disagreements:**
- "That's how we've always done it" (not a reason)
- "I just don't like it" (need specifics)
- Multiple rounds of the same argument (need to sync live)
- Personal attacks or frustration (take a break)

**Senior insight:** The sign of a healthy team isn't zero disagreements - it's handling them constructively. If you find yourself in frequent review conflicts with the same person, address the relationship, not just the code. Often there's a communication style mismatch or missing shared context.

---

### Q: Tell me about a time you improved a process on your team

**Answer Framework (STAR):**

**Situation:**
"Our deployment process was painful. Releases happened once a week, required a 2-hour 'war room', and had a ~20% rollback rate. Engineers dreaded release day, and we couldn't ship hotfixes quickly."

**Task:**
"As a senior engineer, I wanted to reduce release friction and enable faster, safer deployments. I didn't have official authority to change the process, so I needed to build consensus."

**Action:**

1. **Gathered data:**
   - Tracked time spent on each release for a month
   - Documented common rollback causes
   - Surveyed team on pain points

2. **Identified root causes:**
   - Large batch sizes (more changes = more risk)
   - No staging environment matching production
   - Manual checklist prone to human error

3. **Proposed incremental changes:**
   - Week 1-2: Automate the deployment checklist into a CI script
   - Week 3-4: Set up production-like staging environment
   - Week 5-8: Implement feature flags for gradual rollouts
   - Week 9+: Move to daily releases

4. **Built coalition:**
   - Got DevOps lead excited about automation
   - Showed PM how faster releases helped customers
   - Addressed QA concerns about testing time

5. **Piloted before full rollout:**
   - Started with low-risk service
   - Documented improvements
   - Used success to expand

**Result:**
"Over 3 months, we moved from weekly releases to multiple daily deploys. Rollback rate dropped from 20% to under 2%. Release time went from 2 hours to 15 minutes (automated). Engineers could ship and iterate faster, improving team morale. The approach was adopted by two other teams."

**Key Learnings:**
- Start with data, not opinions
- Make change incremental, not big-bang
- Build allies before proposing formally
- Pilot before scaling

**Senior insight:** Process improvement is as much about change management as technical skills. Even good ideas fail without buy-in. Show don't tell - pilot results convince better than proposals. And always measure before/after to prove impact.

---

### Q: How do you prioritize when everything seems urgent?

**Answer:**

**My Framework:**

```
┌─────────────────────────────────────────────────────────────┐
│                    Priority Matrix                           │
│                                                             │
│        │ URGENT              │ NOT URGENT            │
│ ───────┼─────────────────────┼───────────────────────│
│ HIGH   │ 1. DO NOW           │ 2. SCHEDULE           │
│ IMPACT │ Production outages, │ Architecture work,    │
│        │ security issues,    │ tech debt, mentoring  │
│        │ blocked teammates   │                       │
│ ───────┼─────────────────────┼───────────────────────│
│ LOW    │ 3. DELEGATE/QUICK   │ 4. QUESTION/DROP      │
│ IMPACT │ Minor bugs, quick   │ Nice-to-haves,        │
│        │ requests            │ premature optimization│
└─────────────────────────────────────────────────────────────┘
```

**My Process:**

**1. Clarify actual urgency:**
"When someone says something is urgent, I ask: 'What breaks if this isn't done today? This week?' Often 'urgent' really means 'important to me right now.'"

**2. Identify dependencies:**
"If my work unblocks 3 other engineers, that jumps priority even if it's not the 'biggest' task."

**3. Communicate trade-offs:**
"I tell stakeholders: 'I can do A or B by Friday, not both. Which matters more?' Making them choose reveals true priority."

**4. Protect focus time:**
"I batch interruptions. Check Slack at 9am, 1pm, 4pm - not constantly. Real emergencies will reach me."

**Example:**

"Last quarter, I had three 'top priorities' from three different stakeholders:
- PM wanted feature X for a customer demo
- Engineering Manager wanted critical bug fixed
- Another team needed code review blocking their release

I:
1. Asked PM when the demo was (3 days away - actual deadline)
2. Assessed the bug - affecting 5% of users, had workaround (high but not P0)
3. Estimated code review would take 1 hour

Decision: Code review first (quick win, unblocked a team), then bug (had workaround), then feature (delivered day before demo). Communicated plan to all three, got buy-in."

**When Everything is Truly Urgent:**

1. **Escalate** - "Manager, I have three P0s. Help me prioritize."
2. **Ask for help** - "Can someone pair on this to parallelize?"
3. **Reduce scope** - "Can we ship 80% now, 20% next week?"
4. **Say no** - "If we do X, Y won't happen. Is that acceptable?"

**Red Flags:**
- Everything labeled P0 (nothing is prioritized)
- Afraid to push back (unsustainable)
- Working on what's loudest, not most important (reactive mode)

**Senior insight:** Prioritization is a leadership skill, not just productivity. Senior engineers protect team focus by being the 'filter' - saying no to low-impact urgent requests, ensuring high-impact work doesn't get crowded out. If you can't prioritize, you're being prioritized by whoever asks last.
