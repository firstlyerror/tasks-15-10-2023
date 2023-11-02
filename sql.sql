use test 
create table Students(
studentID int identity primary key,
firstName varchar(20) ,
lastName varchar(30),
age int ,
university nvarchar(100) ,
city varchar(50))

select * from Students
insert into Students(firstName,lastName,age.university,city)
values('perviz','Qarayev','27','sdu','Baku')
  --burada ozum elave etdim editleyerek(sol ekrandan edit top 200 rows) midterm var idi ona gore vaxt qazanmaq istedim
--4
select * from Students
--5
select age from Students
--6
select firstName, lastName from Students
--7
select firstName from Students
where firstName like  '[M,N]%'
--8
select firstName from students
where not firstName='perviz'
--9
select firstname from students
where firstname like'_U%'
--10
update Students
set city='Roma' where studentID in (2,3)
select city from Students
--11
select * from students
where age>20
--12 
select * from students
order by age asc
--13
select * from students
order by firstName desc
--14
select distinct(firstName) from Students
--15
select sum(age)
 from Students
--16
select top 1 * from Students oreder by age asc
--17 
select top 1 * from Students oreder by age desc
--18 
select count(*) from Students
--19
select avg(age) from Students
--20 
delete from students 
where studentID=5

select * from Students
--21
select * from Students
where firstName in ('perviz','ilkin')
--(perviz-in ID si 5 idi ve bayaq onu sildik)
--22
select * from students
where age between 22 and 29
--23
select top 4 * from students
--24
delete from Students
select * from Students
