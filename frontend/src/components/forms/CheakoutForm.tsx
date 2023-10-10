import { SubmitHandler, useForm } from 'react-hook-form'

import { CheakoutInput } from "../Inputs/CheakoutInput"
import { ReactNode } from 'react'
import { Inputs } from '../../types/componentsTypes'

const Container = ({children, title}: {children: ReactNode, title: string}) => (
  <div className="bg-neutral-200 p-2 flex flex-col gap-2 shadow-xl rounded-lg">
    <h2 className="font-extrabold tracking-widest text-xl">{title}</h2>
    {children}
  </div>
)

const CheakoutForm = ({nextStep}: {nextStep: (step: number) => void}) => {

  const formData = JSON.parse(localStorage.getItem('formData') || '{}');

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    defaultValues: {
      name: formData.name || '',
      email: formData.email || '',
      address: formData.address || '',
      canton: formData.canton || '',
      cedula: formData.cedula || '',
      celular: formData.celular || '',
      distrito: formData.distrito || '',
      provincia: formData.provincia || '',
    }
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    localStorage.setItem('formData', JSON.stringify(data));
    nextStep(2)
  }

  return (
    <form className="lg:w-1/2 flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Container title="Datos Personales">
        <CheakoutInput 
          id='name' 
          name='name' 
          label='Nombre Completo'
          minLength={3} 
          register={register}
          error={errors} 
        />
        <CheakoutInput 
          id='email' 
          name='email'
          type='email'
          label='Correo Electronico'
          minLength={3} 
          register={register}
          error={errors} 
        />
        <CheakoutInput 
          id='calular' 
          name='celular' 
          label='Celular'
          type='tel'
          minLength={3} 
          register={register}
          error={errors} 
        />
        <CheakoutInput 
          id='cedula' 
          name='cedula' 
          label='Cedula'
          minLength={3} 
          register={register}
          error={errors} 
        />
      </Container>
      <Container title="Direccion">
        <div className="flex flex-col gap-2">
          <CheakoutInput 
            id='provincia' 
            name='provincia' 
            label='Provincia'
            minLength={3} 
            register={register}
            error={errors} 
          />
          <CheakoutInput 
            id='canton' 
            name='canton' 
            label='Canton'
            minLength={3} 
            register={register}
            error={errors} 
          />
          <CheakoutInput 
            id='distrito' 
            name='distrito' 
            label='Distrito'
            minLength={3} 
            register={register}
            error={errors} 
          />
          <div className="flex flex-col">
            <label htmlFor="address">Direccion exacta</label>
            <textarea {...register("address", {required: true})} className="h-52 py-2 px-4 bg-transparent resize-none border border-neutral-400 rounded-lg text-neutral-950 tracking-widest text-base" name="address" />
          </div>
        </div>
      </Container>
      {/* <button type='submit' className={btnStyles.primary} >Submit</button> */}
      <br />
    </form>
  )
}

export default CheakoutForm