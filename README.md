# AirPals.co

### About the Author

Carlos is an engineer with 21+ years of professional experience in software development for the web and the desktop; 20 of which working with PHP but also performing activities such as Quality Control and testing, on a variety of projects for big and small companies (like Bayer, VIACOM, geo-location services, e-commerce and more). You can check his website at [https://carlos-bucheli.com/](https://carlos-bucheli.com/), some public repos on his [GitHub](https://www.linkedin.com/in/carlos-bucheli-padilla/) account and give him an endorsement on [LinkedIn](https://www.linkedin.com/in/carlos-bucheli-padilla/).


### About the Project

This is a coding demo for AirPals; its purpose is to demonstrate hard-skills by creating a small address or POI search form using React. The UI provides an auto-complete box that uses a pre-selected map service (while supporting multiple ones).


### Tech Stack

- Vite
- Vitest
- React
- TypeScript
- MapQuest
- GoogleMaps


### Local Setup

1. Install Prerequisites

   ```sh
   npm install npm@latest -g
   ```

2. Clone the repo

   ```sh
   git clone git@github.com:cabp-ec/airpals.co.bootstrap.git
   git clone git@github.com:cabp-ec/airpals.co.tailwing.git
   ```

3. Optional: register and get a key from your favorite map service (e.g. MapQuest); copy and paste the key in the .env environment

   ```sh
   MQ_KEY:abc
   GM_KEY:abc
   ```

4. Install packages

   ```sh
   cd ./airpals.co.bootstrap
   npm install
   ```

5. Optional: type-in the accepted set of zip codes in the config directory, as an array

   ```sh
   /.../airpals.co.bootstrap/config/validCodes.ts
   ```

   ```javascript
   export const validCodes = [
     '10286',
     '10099',
     '10278',
     '10119',
   ];
   ```

6. Run the project

   ```sh
   npm run dev
   ```

7. Access the project using your favorite browser

   ```sh
   http://localhost:5173/
   ```


### Usage

The AirPals demo will "grab" a key for the pre-selected map service from the current environment (e.g. a .env file or AWS).

Once the page is loaded, simply start typing an address or the name of a place (e.g. typing "time" will show Times Square as a suggestion)


### Atomic Design

For my react projects I use a slightly modified version of [ARc](https://arc.js.org/); according to its author:

> *ARc is a React starter kit based on the Atomic Design methodology. It's progressive, which means that you can start with the basic boilerplate and try the other features when you are comfortable.*


While [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) is defined as:

> Atomic design is a methodology for creating design systems. There are five distinct levels in atomic design: atoms, molecules, organisms, templates and pages.

The modification I made to ARc are not functional but rather organizational (i.e. the levels), this helps me a lot to handle files and directories either manually or in an automated fashion. Additionally, it's been proven to be useful and easy to handle by senior and junior roles alike because the variations for the upper levels are pretty much limited and yet adaptable to any kind of project of any size. After those modifications the scaffolding looks as follows:

```
- airpals.co
	> config
	> public
		> css
		> img
		> js
		- favicon.ico
	> src
		> app
			> api
			> clients
			> context
			> maps
				> azuremaps
				> gmaps
				> mapquest
			> models
			> services
			> stores
		> components
			> pages
			> organisms
			> molecules
			> atoms
			> particles
		> templates
		> themes
		> templates
		> themes
	> tests
```


### Naming Convention

Naming files and folders could be a bit challenging if we consider that developers prefer naming files based mostly in their experiences and rules of thumb. Even though there are pre-defined and well accepted naming conventions it does change from organization to organization and sometimes from developer to developer.

**In my case I rather prefer to adapt to organizational rules and coordinate with my team ahead**. That being said, the naming convention I've chosen is also quite simple, in fact most of us have seen it in the past:

- Lowercase
- Separate each word with a dot (e.g. places.search.context.ts)
- When an interface is a bit big or shared among multiple objects, move its contents into a separate file
- Interfaces, enums and types use their own defining word at the end (e.g. maps.services.enum.ts, page.header.interface.ts)
- Avoid assumptions, talk with your team instead


### Code Commits

The commits you'll see in the repository history may look quite simple, but it's actually very detailed. The way I submit my commit messages is (again) by adapting to the organization rules, when there are no specific rules I rather prefer to use squashed commits while maintaining the same format, like so:

```
[008,009] Styling & Places Search
- Overriding bootstrap defaults
- Using all collections in MapQuest PlaceSearch Autocomplete
```

In the example above you can see the ticket or tickets that were worked on the 1st line, each line afterwards represents the actual activities performed while working the ticket(s). This is extremely helpful specially when performing code reviews because other developers will see the actual detail formatted using markdown instead of smashing details in one single line (which to many companies it should include your name, even if git tracks that by itself).

When using squash commits you'll see an ordered list of all the commits. All 3 major git service (i.e. Bitbucket, GitHub and GitLab) do use markdown to format commit messages in their platform, when you open code review request for squashed commits you'll se the title line + a little button showing an ellipsis, when you click it all the details will be shown (that's because squashed commits could be very large).


### Map Services

This demo app includes a basic support (it's basic for demo purposes) for multiple map services; they can be used from the Places Search Context.

- Google Maps: google maps requires payment for using the search features; honestly I don't like to enter my financial information to pay for a service that I'm not going to use

- MapQuest: this is the classic competitor for google, it always have provided a wide network of developers + free APIs; additionally, they don't track you up to the bone like Google does...


### Principles, Patterns and Practices

The following are the principles, patterns and practices I use; I might apply several or just a few depending on the nature of the project:

- Principles: SOLID, DRY, KISS, LeBlanc Law
- Patterns: abstract factory, builder, factory method, pool, prototype, adapter/wrapper, bridge, composite, data mapper, decorator, dependency injection, facade, registry, chain of responsibilities, command, repository
- Practices: OOP, avoid fat-ass containers that serve no purpose, use functional components as much as possible, smart use of React Context to share functionality among the AST, and most importantly **APPLY BIG O NOTATION AT ALL TIMES**


### FAQs

- Why using Vite instead of Webpack?
  - Webpack requires more time and effort, that's the main reason
  - It's relatively new and I wanted to learn it, then I liked it better than Webpack
  - Approaches for implementing webpack do vary from project to project
- Why did you use bootstrap Instead of Tailwind for this project?
  - Because it's pretty straight forward
  - Development time, I have more experience with Bootstrap than with Tailwind; therefore I can implement it faster
- Why using a CSS framework from the main HTML file rather than using one SAAS or LAAS file per component?
  - Because I prefer to show styled basic HTML even before the react components get rendered
- Why did you include a loader?
  - The loader that you see when the page loads is NOT a react component, as many developers actually do, it's a simple piece of flat HTML
  - This approach allows me to load dependencies, services and more before reacts comes in, that makes big react apps to perform faster and to require less memory
- Which tools or libraries would you use to handle the app state?
  - Elf, that's always my 1s option
  - Redux, when the organizational rules demands
  - Redux Toolkit, that's always my last option because it requires more space in disk, a bit more of memory and the approach is very very variable; there are 2 official ways to do the same thing, which makes things a bit challenging due to the fact that the approach changes from company to company; additionally, there's no actual need to the usual immense amount of files for reducers and actions (that's difficult to maintain)
  - Flux, I've used it in the past but I don't like it much; I use it only when the organization demands so
- How do you handle code reviews
  - By talking and coordinating with my team BEFORE start coding, in order to get to an agreement ahead of development instead of individual endless discussions with every single developer and boss after development
  - Review SOLID and Big O Notation (I do care about performance)


### TODOs:

- Implement a .env file
