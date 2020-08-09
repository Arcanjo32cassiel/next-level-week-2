import React, { useState, FormEvent }  from 'react';

import Input from '../../components/input';
import PageHeader from '../../components/PageHeader';
import TeacherItem, {Teacher} from '../../components/TeacherItem';
import Select from '../../components/select';

import './styles.css'
import api from '../../services/api';


function TeacherList() {
    const [teachers, setTeachers] = useState<Teacher[]>([]); 

    const [subject, setSubjet] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers(e: FormEvent) {
      e.preventDefault();

    //   console.log({subject, week_day, time})

     const response =  await api.get('classes', { 
        params: {
            subject,
            week_day,
            time
        } 
    })

      setTeachers(response.data);

    }

    return(
        <div id="page-teacher-list" className="container">
           <PageHeader title="Estes são os proffys disponiveis.">
            
            <form id="search-teachers" onSubmit={searchTeachers}>
            <Select 
                name="subject" 
                label="Matéria"
                value={subject}
                onChange={ e =>  {setSubjet(e.target.value)}}
                options={[
                    {value:'Artes', label: 'Artes'},
                    {value:'Biologia', label: 'Biologia'},
                    {value:'Ciências', label: 'Ciências'},
                    {value:'Educação fisica', label: 'Educação fisica'},
                    {value:'Fisica ', label: 'Fisica'},
                    {value:'Geografia', label: 'Geografia'},
                    {value:'História', label: 'História'},
                    {value:'Matemática', label: 'Matemática'},
                    {value:'Português', label: 'Portugês'},
                    {value:'Química', label: 'Quimica'}

                ]}
            />
                        <Select 
                name="week_day" 
                label="Dia da semana"
                value={week_day}
                onChange={ (e) =>  {setWeekDay(e.target.value);}}
                options={[
                    {value:'0', label: 'Domingo'},
                    {value:'1', label: 'Segunda-feira'},
                    {value:'2', label: 'Terça-feira'},
                    {value:'3 ', label: 'Quarta-feira'},
                    {value:'4 ', label: 'Quinta-feira'},
                    {value:'5', label: 'Sexta-feira'},
                    {value:'6', label: 'Sábado'},
                ]}
            />
                <Input type="time"
                 name="time" 
                label="Hora"
                value={time}
                onChange={ (e) =>  {
                    setTime(e.target.value)}} />
            
            <button type="submit"> Buscar</button>
            </form>
           </PageHeader>
            
                <main>
                    {teachers.map((teacher: Teacher) => {
                    
                        return <TeacherItem key={teacher.id}  teacher={teacher}/>

                    })}
                </main>
               
        </div>
        )
}
export default TeacherList;