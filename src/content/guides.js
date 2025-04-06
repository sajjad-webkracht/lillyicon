export const guides = [
    {
        link: "introduction",
        title: "Introduction",
        content: `
        <p class='mb-4'>
            Lilly Icon was created to bring websites and apps to life with interactive animated icons, built using the new 
            <a href='https://rive.app/' target='_blank' class='text-blue-500 hover:underline'>Rive</a> format. Designed for developers, these icons require no animation expertise—just import them with Rive runtime libraries and use them seamlessly in your projects, whether it's a mobile app or a website. Thanks to Rive’s SVG-based animations, the file sizes remain incredibly small.
        </p>
        <p class='mb-4'>
            Additionally, static versions of the icons in .SVG and .PNG formats are available. This allows you to use static icons alongside animated ones from the same collection, ensuring a consistent style in your project.  
        </p>
        <p class='mb-4'>
            All icons are completely free and will always remain free—no sign-ups, no credit cards, no trials. Simply download and use them. Every icon is licensed under the 
            <a href='https://creativecommons.org/licenses/by/4.0/' target='_blank' class='text-blue-500 hover:underline'>Creative Commons Attribution 4.0 International (CC BY 4.0) License</a>.
        </p>
        <p class='mb-4'>
            This project thrives on the generous 
            <a href='/donate' class='text-blue-500 hover:underline'>donations</a> of users who want to keep it alive and growing.
        </p>
    `,
    },
    {
      link: "usage",
      title: "How to Use",
      content: `
<p class="mb-4">
    To use Lilly Icon, you need to rely on Rive’s open-source runtime libraries. These libraries allow you to load and control animated icons provided by Lilly Icon. They are available for the following technologies, and you can check their documentation on the <a href="https://rive.app/" target="_blank" class="text-blue-600 hover:underline">Rive website</a>:
  </p>
  <ul class="grid md:grid-cols-2 gap-4 mb-12">
    <li>
      <a href="https://rive.app/docs/runtimes/web/web-js" target="_blank" class="p-4 rounded-sm bg-blue-500/10 hover:bg-blue-500/20 border-solid border-blue-500/30 duration-200 border-[1px] block">
        <h2 class="font-bold text-blue-500 text-lg mb-1">Web (JS)</h2>
        <p class="text-blue-300 text-sm">JavaScript/WASM runtime for Rive documentation.</p>
      </a>
    </li>
    <li>
      <a href="https://rive.app/docs/runtimes/react/react" target="_blank" class="p-4 rounded-sm bg-blue-500/10 hover:bg-blue-500/20 border-solid border-blue-500/30 duration-200 border-[1px] block">
        <h2 class="font-bold text-blue-500 text-lg mb-1">React</h2>
        <p class="text-blue-300 text-sm">React runtime for Rive documentation.</p>
      </a>
    </li>
    <li>
      <a href="https://rive.app/docs/runtimes/react-native/react-native" target="_blank" class="p-4 rounded-sm bg-blue-500/10 hover:bg-blue-500/20 border-solid border-blue-500/30 duration-200 border-[1px] block">
        <h2 class="font-bold text-blue-500 text-lg mb-1">React Native</h2>
        <p class="text-blue-300 text-sm">React Native runtime for Rive documentation.</p>
      </a>
    </li>
    <li>
      <a href="https://rive.app/docs/runtimes/flutter/flutter" target="_blank" class="p-4 rounded-sm bg-blue-500/10 hover:bg-blue-500/20 border-solid border-blue-500/30 duration-200 border-[1px] block">
        <h2 class="font-bold text-blue-500 text-lg mb-1">Flutter</h2>
        <p class="text-blue-300 text-sm">Flutter runtime for Rive documentation.</p>
      </a>
    </li>
    <li>
      <a href="https://rive.app/docs/runtimes/apple/apple" target="_blank" class="p-4 rounded-sm bg-blue-500/10 hover:bg-blue-500/20 border-solid border-blue-500/30 duration-200 border-[1px] block">
        <h2 class="font-bold text-blue-500 text-lg mb-1">Apple</h2>
        <p class="text-blue-300 text-sm">Apple runtime for Rive documentation.</p>
      </a>
    </li>
    <li>
      <a href="https://rive.app/docs/runtimes/android/android" target="_blank" class="p-4 rounded-sm bg-blue-500/10 hover:bg-blue-500/20 border-solid border-blue-500/30 duration-200 border-[1px] block">
        <h2 class="font-bold text-blue-500 text-lg mb-1">Android</h2>
        <p class="text-blue-300 text-sm">Android runtime for Rive documentation.</p>
      </a>
    </li>
  </ul>
  <p class="mb-4">
    All animated icons have a single state named <code class="bg-blue-500/10 px-2 py-1 rounded-sm text-zinc-50 text-sm">default</code> and accept two inputs: <code class="bg-blue-500/10 px-2 py-1 rounded-sm text-zinc-50 text-sm">isClicked</code> and <code class="bg-blue-500/10 px-2 py-1 rounded-sm text-zinc-50 text-sm">isHover</code>. Use <code class="bg-blue-500/10 px-2 py-1 rounded-sm text-zinc-50 text-sm">isClicked</code> for click interactions and <code class="bg-blue-500/10 px-2 py-1 rounded-sm text-zinc-50 text-sm">isHover</code> for hover effects.
  </p>
  <p class="mb-4">
    If you're using these icons on websites, I recommend disabling Rive’s built-in event listeners by setting <code class="bg-blue-500/10 px-2 py-1 rounded-sm text-zinc-50 text-sm">shouldDisableRiveListeners: true</code>. This gives you full control over interactions and prevents issues with hover effects on mobile devices.
  </p>
  <p class="mb-4">
    All icons are designed to work seamlessly with or without hover effects, and these effects function independently. If you prefer to use only one of the animations, you can do so without any issues.
  </p>
  <p class="mb-4">
    If you have any suggestions for improving the icons' usability, feel free to contact me at hi@sajjaddashti.ir. This project is continuously evolving, with constant improvements.
  </P>
`,
    },
    {
      link: "color",
      title: "Customizing Colors",
      content: "To change an icon's color, open it in Rive Editor and adjust it there. However, a runtime color-changing feature using data binding is expected to be added soon. Stay tuned—this project is still in its early stages!",
    },
    {
      link: "licensing",
      title: "Licensing",
      content: `
      <p class="mb-4">
        All icons are licensed under the
        <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" class="text-blue-500 hover:underline">Creative Commons Attribution 4.0 International (CC BY 4.0) License</a>.
        This means you can use them for personal and commercial projects, but you must provide proper attribution to the original creator. You can do this by including a link to the Lilly Icon website or mentioning it in your project documentation.
      </p>
      <h2 class="text-lg font-bold text-blue-500 mb-1 mt-8">
        Why Attribution Matters
      </h2>
      <p class="mb-4">
        Providing attribution is a small yet meaningful way to support the work of creators. By acknowledging the creator and the platform, you help raise awareness about the project, allowing it to grow and remain free for the community.
      </p>
      <p class="mb-4">
        If you have any questions about the licensing or how to provide proper attribution, feel free to <a href="mailto:hi@sajjaddashti.ir" class="text-blue-500 underline">reach out</a>. I'm here to help! Please note that while the icons are free to use, I appreciate any support you can provide to keep this project alive. You can do this by sharing it with others, providing feedback, or even making a <a href="/donate" target="_blank" class="text-blue-500 underline">donation</a>.
      </p>
      `,
    },
  ];