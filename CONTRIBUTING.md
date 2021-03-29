# CONTRIBUTING

Contributions are always welcome, no matter how large or small. Before contributing,
please read the [code of conduct](CODE_OF_CONDUCT.md).

Some thoughts to help you contribute to this project

## Recommended Communication Style

1. Always leave screenshots for visuals changes
1. Always leave a detailed description in the Pull Request. Leave nothing ambiguous for the reviewer.
1. Always review your code first. Do this by leaving comments in your coding noting questions, or interesting things for the reviewer.
1. Always communicate. Whether it is in the issue or the pull request, keeping the lines of communication helps everyone around you.

## Setup (forks are preferred).

```sh
$ git clone https://github.com/<your-name>/open-sauced
$ cd open-sauced
$ npm install
```

## Building

```sh
$ npm run build
```

## Testing

```sh
# the tests will run in watch mode by default
$ npm run test
```

## Pull Requests

### _We actively welcome your pull requests, however linking your work to an existing issue is preferred._

1. Fork the repo and create your branch from `main`.
1. Name your branch something that is descriptive to the work you are doing. i.e. adds-new-thing or fixes-mobile
1. If you've added code that should be tested, add tests.
1. If you've changed APIs, update the documentation.
1. If you make visual changes, screenshots are required.
1. Ensure the test suite passes.
1. Make sure you address any lint warnings.
1. If you make the existing code better, please let us know in your PR description.
1. A PR description and title are required. The title is required to begin with: "feat:" or "fix:"
1. [Link to an issue](https://help.github.com/en/github/writing-on-github/autolinked-references-and-urls) in the project. Unsolicited code is welcomed, but an issue is required for announce your intentions. PR's without a linked issue will be marked invalid and closed.

*note for maintainers: All pull requests need a label to assist automation. See the [template](https://github.com/open-sauced/open-sauced/blob/HEAD/.github/release-drafter.yml) to guide which labels to use.*

### PR Validation
Examples for valid PR titles:

- fix: Correct typo.
- feat: Add support for Node 12.
- refactor!: Drop support for Node 6.

_Note that since PR titles only have a single line, you have to use the ! syntax for breaking changes._

See [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for more examples.

### Work in progress
GitHub has support for draft pull requests, which will disable the merge button until the PR is marked as ready for merge.

## Issues

If you plan to contribute a change based on an open issue, please assign yourself by commenting on the following word `.take`. Issues that are not assigned are assumed open, and to avoid conflicts, please assign yourself before beginning work on any issues.

If you would like to contribute to the project for the first time, please consider joining checking the [bug](https://github.com/open-sauced/open-sauced/issues?q=is%3Aissue+is%3Aopen+label%3A%22%F0%9F%90%9B+bug%22) or [good first issue](https://github.com/open-sauced/open-sauced/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) labels. 

Also, all questions are welcomed.

### Triage Team

The Triage team is inspired by [expressjs/express](https://github.com/expressjs/express/blob/HEAD/Triager-Guide.md). This team exists to create a path for making contributions to this project and open source. All Triage Team members are expected to follow this guide: [TRIAGE_GUIDE.md](TRIAGE_GUIDE.md)

> **There are no minimum requirements to become a member of the Triage Team.**

For those interested in getting involved in the project or just open source in general, please request an invite to the Triage Team in [this discussion.](https://github.com/open-sauced/open-sauced/discussions/638) 

## Funding
Open Sauced is a part of GitHub Sponsors. If you would like to contribute, please note the [sponsor page](https://github.com/sponsors/open-sauced) for details on how funds are distributed. If you have made any contributions to the projectd directly or indirectly, please consider adding your profile to the [funding.yml](https://github.com/open-sauced/open-sauced/blob/main/.github/funding.yml).

## Community

Do you have questions? Join the conversation in our [Discord](https://discord.gg/gZMKK5q).

## Coding Tips
- Ask questions if you are stuck. 
- Use [CSS variables](https://github.com/open-sauced/open-sauced/blob/HEAD/src/styles/variables.js)
- Always use [rel="noreferrer" on all target="_blank" links](https://web.dev/external-anchors-use-rel-noopener/). 

## License

By contributing to the Open Sauced project, you agree that your contributions will be licensed
under its [MIT license](LICENSE).
