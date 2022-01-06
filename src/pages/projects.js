import React from 'react'
import Layout from "../components/Layout"
import Project from '../components/Project'
import monathem from '../images/projects/monathem.png'
import khodarwabahar from '../images/projects/khodarwabahar.png'
import binothaymeen from '../images/projects/binothaymeen.png'
import erteqaa from '../images/projects/erteqaa.png'
import mastorahbr from '../images/projects/mastorahbr.png'
import konasha from '../images/projects/konasha.png'
import NSPROJECT from '../images/projects/NSPROJECT.png'
import carplus from '../images/projects/carplus.png'
export default function projects() {
    return (
        <Layout>
            <div className="text-4xl tracking-wide leading-relaxed lg:text-5xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 pt-36 md:pt-0 md:h-14">
                المشاريع
            </div>
            <Project title="متجر جمعية البر بمستورة" desc="أضفت المتجر الى الموقع، مع بوابة الدفع تقبل مدى، أبل باي، فيزا" link="http://mastorahbr.org.sa/shop/ " image={mastorahbr} />
            <Project title="كار بلس" desc='صفحة هبوط تعريفية بشركة خاصة بتأجير السيارات الفاخرة.  يستخدم خدمة "احصائيات قوقل" لمعرفة احصائيات وتفاعل المستخدمين مع الموقع' link="https://www.carplus-sa.com" image={carplus} />
            <Project title="المنظم" desc="موقع لتنظيم المهام ووضع موعد لها ورؤية المواعيد بشكل بسيط ومنظم" link="https://monathem.herokuapp.com" image={monathem} />
            <Project title="موقع حلقة جامع بن عثيمين بجدة" desc="موقع لمتابعة حصاد الطلاب. يتكون من صفحة خاصة بالطالب يسجل فيها انجازه، وصفحة خاصة بالمعلم لمتابعة طلاب حلقته" link="https://khodarwabahar.com/" image={binothaymeen}  isPrivate ="true"/>
            <Project title="خضار وبهار" desc="(غير مكتمل) موقع لبيع الخضروات والفواكه مع خاصية الدفع عند الاستلام" link="https://khodarwabahar.com/" image={khodarwabahar}/>
            <Project title="ارتقاء التصميم للمقاولات العامة" desc="موقع مؤسسة مقاولات عامة. يعرض خدماتهم وصور مشاريعهم" link="http://erteqaa.co/en/home-2/" image={erteqaa} />
            <Project title="تصميم كناشة الفوائد" desc="تصميم واجهة UI لتطبيق كناشة الفوائد" link="#" image={konasha} isPrivate="true" />
            <Project title="تصميم مشروع مركز الحي" desc="تصميم نموذج أولي لمشروع مركز الحي" link="#" image={NSPROJECT} isPrivate="true" />

        </Layout>
    )
}
