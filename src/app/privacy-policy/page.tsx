import Image from 'next/image';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className='px-16 pt-6 pb-32 '>
      <div className='mb-8 '>
        <h1 className='text-4xl font-semibold my-4 text-slate-800'>
          Privacy Policy
        </h1>
        <p className='mt-2 text-xl font-light text-slate-600 '>
          At our company, we take privacy and data security seriously. We follow
          industry best practices to ensure the safety of your personal
          information and provide a secure user experience.
        </p>
      </div>
      <div className='flex justify-between mx-auto'>
        <div>
          <Image
            src='/pp.png'
            alt='PP'
            width={1200}
            height={600}
            className='pr-8'
          />
        </div>
        <div className='text-justify'>
          <div className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4 text-black/90'>
              Authentication
            </h2>
            <hr />
            <p className='my-2 text-black/50 text-lg'>
              We use state-of-the-art authentication mechanisms to protect your
              account. This includes strong password policies and encryption of
              sensitive data during using hashing and salting of the passwords
              even up to 20 times transmission.
            </p>
          </div>
          <div className='my-8'>
            <h2 className='text-2xl font-semibold my-4 text-black/90'>
              Data Encryption
            </h2>
            <hr />
            <p className='my-2 text-black/50 text-lg'>
              To safeguard your data, we employ industry-standard encryption
              techniques. This ensures that your personal information remains
              confidential and protected from unauthorized access.
            </p>
          </div>
          <div className='mt-8'>
            <h2 className='text-2xl font-semibold my-4 text-black/90'>
              Dashboard Analysis
            </h2>
            <hr />
            <p className='mt-2 text-black/50 text-lg'>
              In order to enhance and optimize our services, we may collect and
              analyze data related to user interactions with our dashboard. This
              includes, but is not limited to, aggregated usage patterns,
              feature popularity, and user engagement metrics. Rest assured,
              this analysis is conducted in a way that preserves the anonymity
              of individual users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
