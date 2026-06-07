import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
    NodeConnectionTypes
} from 'n8n-workflow';

export class VerificarEmail implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Verificar Email',
		name: 'verificarEmail',
		icon: 'file:verificarEmail.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Verifica la validez de una dirección de correo electrónico',
		defaults: {
			name: 'Verificar Email',
		},
		inputs: [NodeConnectionTypes.Main],
        outputs: [NodeConnectionTypes.Main],
        credentials: [
            {
                name: 'verificarEmailApi',
                required: true,
            },
        ],
		properties: [
        {
        displayName: 'Dirección De Email',
        name: 'email',
        type: 'string',
        placeholder: 'Introduce la dirección de email',
        default: '',
          },
        ],
    }; 
    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
        const items = this.getInputData();
        const returnData: INodeExecutionData[] = [];
        for (let i = 0; i < items.length; i++) {
            const email = this.getNodeParameter('email', i) as string;
            const credentials = await this.getCredentials('verificarEmailApi');
            const apiKey = credentials!.apiKey as string;

            const response = await this.helpers.request({
                method: 'GET',
                uri: 'https://api.emailable.com/v1/verify',
                qs: {
                    email: email,
                    api_key: apiKey,
                },
                headers: {
                    Accept: 'application/json',

                },
                json: true,
            });

            const result = Array.isArray(response) ? response : [response];

            for (const res of result) {
                returnData.push({ 
                    json: {
                        email: res.email,
                        deliverable: res.state == "deliverable",
                        score: res.score,
                    }
                });
            }
        }
        return [returnData];
	}                                              
}