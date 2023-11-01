# Pitchup Contributor Quickstart

This doc will explain how the wizard and guides work and how to write them.

## Overview

There are two parts to Pitchup's content:

- Markdown articles
- Device configs for the Wizard

### Markdown Articles

Markdown articles are just standalone guides, about anything, written markdown, under `app/`, with a `.mdx` extension.

They can be long or short. They can tackle multiple subjects, or just one. The article format is totally open-ended. Write about anything you think an FPV pilot might want to know about.

### Wizard Device Configs

Device Configs define what gear the user can pick in the Wizard. 

There are three categories of devices: 
- Drones (in `src/config/drones`) 
- Goggles (in `src/config/goggles`)
- Radios (in `src/config/radios`)

Each Device Config is a file with the `.ts` extension and looks like this:

```ts
import { Config } from "@/src/types/Config";

export const config = {
    name: "HDZero",
    articles: [
        "/goggles/hdzero/hdzero",
    ],
    flags: [
        {
            name: "with Expansion Module",
            articles: [
                "/goggles/hdzero/expansion-module"
            ],
        },
        {
            name: "with TBS Fusion",
            articles: [
                "/goggles/hdzero/tbs-fusion"
            ]
        }
    ],
    options: []
} satisfies Config
```

You don't need to know TypeScript to add your own Device Configs. Just copy an existing config and make changes as needed.

Here are the major pieces of a Device Config:

- `name`: The display name of the device
- `articles`: Guides associated with this device
- `flags`: Any checkbox settings for the device
- `options`: Any radio-button settings for the device

Flags and Options allow you to encode variants, extension modules, etc for a Device Config.

**Flags**:

Flags are simple boolean (true/false) checkboxes that a user can enable for their device:

```ts
{
    name: "with Expansion Module",
    articles: [
        "/goggles/hdzero/expansion-module",
    ]
}
```

If the user checks this box, then the `"/goggles/hdzero/expansion-module"` guide will be added to their list.

**Options**:

Each option represents a set of mutually-exclusive choices. The user may only select one of the available choices for each option. Each choice has the same format as a flag:

```
{
    name: "Video System"
    choices: [
        {
            name: "Analog"
            articles: [
                "/goggles/hdzero/analog-modules",
            ],
        },
        {
            name: "HDZero"
            articles: [
                "/goggles/hdzero/hdzero-vtx",
            ]
        },
    ]
}
```

In this case, the user would have to select between either `"Analog"` or `"HDZero"` but not both. Each choice can add different guides.

# Summary

Adding content to Pitchup is easy.

Start off by writing small stand-alone guides under `app/` that tackle either some general topic, or some narrow topic.

Then add device configs under `src/config/` to add new options to the Wizard. Each device config and its flags/options can refer to any available guides that would be helpful for someone with that gear.