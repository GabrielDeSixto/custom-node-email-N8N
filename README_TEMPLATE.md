# n8n-nodes-verificaremail

This is an n8n community node for verifying email addresses from inside your n8n workflows.

It checks whether an email address is deliverable and returns verification data such as the deliverability state and score using the Emailable API.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  <!-- delete if no auth needed -->  
[Compatibility](#compatibility)  
[Usage](#usage)  <!-- delete if not using this section -->  
[Resources](#resources)  
[Version history](#version-history)  <!-- delete if not using this section -->  

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

This node currently supports one operation:

- **Verify Email** - Sends an email address to the verification API and returns the result.

## Credentials

This node requires an **API Key** from Emailable.

To use it, create an API key in your Emailable account and add it to the **Verificar Email API** credential in n8n. The node sends the key as a query-string parameter when it performs the verification request.

## Compatibility

This node is built for recent n8n community node releases and uses the current n8n node execution APIs. Test it against the same n8n version you use for development before publishing.

## Usage

1. Add the **Verificar Email** node to your workflow.
2. Select or create the **Verificar Email API** credential.
3. Enter the email address you want to verify.
4. Run the workflow to receive the verification result, including whether the address is deliverable.

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
* [n8n node development documentation](https://docs.n8n.io/integrations/creating-nodes/)
* [Emailable API documentation](https://emailable.com/docs)

## Version history

- **0.1.0** - Initial version of the Verificar Email node.


