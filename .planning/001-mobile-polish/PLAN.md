# Mobile Polish Phase Plan

<task type="auto">
  <name>Refine Hero Mobile Viewport</name>
  <files>src/app/components/hero/hero.html</files>
  <action>
    - Reduce mobile horizontal padding on glass-card from px-8 to px-5 or px-6 to give text more breathing room.
    - Change md:text-md to md:text-base (valid Tailwind) for the subtitle.
    - Reduce mobile title from text-5xl to text-4xl sm:text-5xl to prevent forced line breaks on extremely narrow screens like iPhone SE.
    - Adjust CTA padding on mobile.
  </action>
  <verify>Check component compilation.</verify>
  <done>Text fits comfortably on `< 375px` screens.</done>
</task>

<task type="auto">
  <name>Refine Skills Bento Grid Stacking</name>
  <files>src/app/components/skills/skills.html</files>
  <action>
    - Ensure skill names have `leading-tight` if they wrap, and allow them to wrap gracefully without breaking the layout.
    - Add flex-wrap or adjust gap in the flex container for icon/name and percentage to prevent clipping. 
  </action>
  <verify>Check component compilation.</verify>
  <done>Long skill names do not clip or break progress bar alignment on single-column mobile view.</done>
</task>
