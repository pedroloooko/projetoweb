import { EntityValidationError } from '@/shared/domain/errors/validation-error';
import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builder';
import { UserEntity, UserProps } from '../../user.entity';

let props: UserProps;

describe('UserEntity integration tests', () => {
   beforeEach(() => {
      props = UserDataBuilder({});
   });

   describe('Constructor method', () => {
      it('Should throw an error when creating a user with invalid name - null', () => {
         const valid: UserProps = {
            ...props,
            name: null as any,
         };
         expect(() => new UserEntity(valid)).toThrow(EntityValidationError);
      });

      it('Should throw an error when creating a user with invalid name - empty', () => {
         const valid: UserProps = {
            ...props,
            name: '' as any,
         };
         expect(() => new UserEntity(valid)).toThrow(EntityValidationError);
      });

      it('Should throw an error when creating a user with invalid name - large', () => {
         const valid: UserProps = {
            ...props,
            name: 'a'.repeat(256) as any,
         };
         expect(() => new UserEntity(valid)).toThrow(EntityValidationError);
      });
      it('Should throw an error when creating a user with invalid email - null', () => {
         const valid: UserProps = {
            ...props,
            email: null as any,
         };
         expect(() => new UserEntity(valid)).toThrow(EntityValidationError);
      });

      it('Should throw an error when creating a user with invalid email - empty', () => {
         const valid: UserProps = {
            ...props,
            email: '' as any,
         };
         expect(() => new UserEntity(valid)).toThrow(EntityValidationError);
      });

      it('Should throw an error when creating a user with invalid email - large', () => {
         const valid: UserProps = {
            ...props,
            email: 'a'.repeat(256) as any,
         };
         expect(() => new UserEntity(valid)).toThrow(EntityValidationError);
      });

      it('Should throw an error when creating a user with invalid email - no email', () => {
         const valid: UserProps = {
            ...props,
            email: "qualquer coisa ",
         };
         expect(() => new UserEntity(valid)).toThrow(EntityValidationError);
      });
      it('Should throw an error when creating a user with invalid password - null', () => {
         const valid: UserProps = {
            ...props,
            password: null as any,
         };
         expect(() => new UserEntity(valid)).toThrow(EntityValidationError);
      });

      it('Should throw an error when creating a user with invalid password - no string', () => {
         const valid: UserProps = {
            ...props,
            password: 10 as any,
         };
         expect(() => new UserEntity(valid)).toThrow(EntityValidationError);
      });

      it('Should throw an error when creating a user with invalid password - large', () => {
         const valid: UserProps = {
            ...props,
            password: 'a'.repeat(101) as any,
         };
         expect(() => new UserEntity(valid)).toThrow(EntityValidationError);
      });

      it('Should throw an error when creating a user with invalid password', () => {
         const valid: UserProps = {
            ...props,
            password: "senha deu erro ",
         };
         expect(() => new UserEntity(valid)).toThrow(EntityValidationError);
      });
      
   });
});
