import { IJsonaModelBuilder, IJsonPropertiesMapper, TJsonaModel, TJsonaRelationships, TReduxObject, TJsonApiRelationships, TJsonApiRelationshipData } from '../JsonaTypes';
declare class ReduxObjectDenormalizer implements IJsonaModelBuilder {
    protected propertiesMapper: IJsonPropertiesMapper;
    protected reduxObject: TReduxObject;
    protected entityType: string;
    protected ids?: string | Array<string>;
    protected returnBuilderInRelations: boolean;
    protected cachedModels: {};
    constructor(propertiesMapper: any);
    setPropertiesMapper(propertiesMapper: IJsonPropertiesMapper): void;
    setReduxObject(reduxObject: TReduxObject): void;
    setEntityType(entityType: string): void;
    setEntityIds(ids: string | Array<string>): void;
    setReturnBuilderInRelations(returnBuilderInRelations: boolean): void;
    build(): null | TJsonaModel | Array<TJsonaModel>;
    buildModel(type: string, id: string | number): null | TJsonaModel;
    buildRelationships(model: TJsonaModel, reduxObjectRelationships: TJsonApiRelationships): null | TJsonaRelationships;
    buildRelationModels(data: TJsonApiRelationshipData | Array<TJsonApiRelationshipData>): null | TJsonaModel | Array<TJsonaModel>;
}
export default ReduxObjectDenormalizer;
